#!/usr/bin/env python3
"""Assemble translated README slices into i18n/README.<lang>.md with the header notice."""
import os, sys, json, hashlib, re

SP = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SP)
from languages import LANGUAGES, RTL

REPO = os.path.dirname(os.path.dirname(SP))  # repo root, this file lives in i18n/tools/

# Per-language notice (top of every translated page) and switcher line (under the H1),
# translated once per language, stored next to this script.
_NOTICES = json.load(open(os.path.join(SP, 'notices.json'), encoding='utf-8'))
NOTICE = {code: v['notice'] for code, v in _NOTICES.items() if 'notice' in v}
SWITCHER = {code: v['switcher'] for code, v in _NOTICES.items() if 'switcher' in v}
# Sample of languages shown in the English switcher line, to make it obvious at a
# glance that the documentation exists in other languages.
SWITCHER_SAMPLE = 'Français, Deutsch, Español, 简体中文, 日本語'

# Post-translation harmonisation, applied after the slices are joined so that
# regenerating a language always yields the same wording. Terms come from the
# card's own shipped translations, which win over any translator choice.
HARMONIZE = {
    'fr': [
        # --- match the wording shipped in src/translations/editor/fr.json ---
        # The editor says « Plus d'infos », never « fiche détaillée »
        ('« Fiche détaillée »', "« Plus d'infos »"),
        ('« fiche détaillée »', "« Plus d'infos »"),
        ('fiche détaillée', "Plus d'infos"),
        # fr.json calls the `rows` option "Lignes"; "rangées" is kept for sub-button rows
        ('Nombre de rangées (hauteur)', 'Nombre de lignes (hauteur)'),
        ('Disposition de mise en forme de la carte', 'Disposition de la carte'),
        ('modes HVAC', 'modes CVC'),
        ('Ouvrants, Réglages', 'Ouvrants, Paramètres'),

        # A French user drives a French Home Assistant: give the labels they actually see
        ('`Edit dashboard`', "`Modifier le tableau de bord`"),
        ('`Manage resources`', '`Ressources`'),
        ('`Add resource`', '`Ajouter une ressource`'),
        ('`JavaScript Module`', '`Module JavaScript`'),
        ('`Add card`', '`Ajouter une carte`'),
        ('puis sur `Create`', 'puis sur `Créer`'),
        ('« Download »', '« Télécharger »'),

        # --- one term, one translation, across all option tables ---
        ('Rayon des angles', 'Arrondi des angles'),
        ('Arrondi des bords', 'Arrondi des angles'),
        ("Couleur de fond de l'arrière-plan", "Couleur du voile d'arrière-plan"),
        ("Couleur d'arrière-plan", 'Couleur de fond'),
        ('éléments compatibles', 'éléments pris en charge'),
        ('date du dernier changement', 'heure du dernier changement'),
        ('date de la dernière mise à jour', 'heure de la dernière mise à jour'),
        ('puce du calendrier', 'chip du calendrier'),
        ('capteur de modèle', 'capteur template'),
        ('capteur modèle', 'capteur template'),
        # "Requirement" column: "Obligatoire" clashed with its own "Optionnel" cells
        ('| Nom | Type | Obligatoire |', '| Nom | Type | Nécessité |'),
        ('| Obligatoire |', '| Nécessité |'),

        # --- option tables all use the infinitive, like the editor does ---
        ("Affiche ou masque l'état ac", "Afficher ou masquer l'état ac"),
        ('Ajoute des boutons personnalisés', 'Ajouter des boutons personnalisés'),
        ("Déplace les boutons d'action", "Déplacer les boutons d'action"),
        ('Définit le type d', 'Définir le type d'),
        ("si elle n'est pas définie, `more-info` sera utilisée",
         'si non défini, `more-info` sera utilisé'),

        # --- upstream English copy/paste bug: this row is in the Cover table ---
        ('Déplacer les contrôles multimédias en bas (fixes) |',
         "Déplacer les boutons d'action de l'ouvrant en bas (fixes) |"),

        # fr.json:405 calls this card "Carte sélecteur", so the heading, its anchor and
        # every mention follow. "sélection" stays only where it means the act of selecting.
        ('## Sélection', '## Sélecteur'),
        ('#sélection)', '#sélecteur)'),
        ('`Sélection`', '`Sélecteur`'),
        ('### Options de la sélection', '### Options du sélecteur'),
        ('carte sélection', 'carte sélecteur'),
        ('sous-boutons de type sélection', 'sous-boutons de type sélecteur'),
        ('un nom pour votre sélection', 'un nom pour votre sélecteur'),
        ('Un nom pour votre sélection', 'Un nom pour votre sélecteur'),
        ('Une icône pour votre sélection', 'Une icône pour votre sélecteur'),

        # --- one wording for "Any ..." in the option tables ---
        ('| Tout ', "| N'importe quel "),
        ('| Toute ', "| N'importe quelle "),

        # --- phrasing ---
        ('le compagnon idéal de la carte pop-up', 'un bon compagnon de la carte pop-up'),
        ('Une vidéo tutorielle arrive bientôt', 'Un tutoriel vidéo arrive bientôt'),
        ("pour aider à sa visibilité", "pour aider à améliorer sa visibilité"),
    ],
}

ORIGINAL = '../README.md'
INDEX = 'languages.md'
# Opens GitHub's web editor. For anyone without write access it forks the repo and turns
# the change into a pull request, so a reader can fix a sentence without cloning anything.
EDIT = 'https://github.com/Clooos/Bubble-Card/edit/main/i18n/README.{code}.md'


def normalize_apostrophes(body):
    """Use straight apostrophes in prose, like the card's shipped translations do.

    Code blocks and inline code are left untouched: a curly quote there would
    break a YAML string or a CSS value.
    """
    out, inside = [], False
    for line in body.split('\n'):
        if re.match(r'^\s*```', line):
            inside = not inside
            out.append(line)
            continue
        if inside:
            out.append(line)
            continue
        # protect inline code, convert the rest
        parts = re.split(r'(`[^`\n]*`)', line)
        out.append(''.join(p if p.startswith('`') else p.replace('’', "'") for p in parts))
    return '\n'.join(out)


def insert_switcher(body, lang, index_href):
    """Put the language switcher line right under the H1 title."""
    line = SWITCHER[lang].format(index=index_href)
    lines = body.split('\n')
    for i, l in enumerate(lines):
        if l.startswith('# '):
            lines.insert(i + 1, '')
            lines.insert(i + 2, line)
            return '\n'.join(lines)
    return body


def assemble(lang, slices_dir):
    files = sorted(f for f in os.listdir(slices_dir) if f.endswith('.md'))
    body = '\n'.join(open(os.path.join(slices_dir, f), encoding='utf-8').read() for f in files)

    for old, new in HARMONIZE.get(lang, []):
        body = body.replace(old, new)
    body = normalize_apostrophes(body)
    body = insert_switcher(body, lang, INDEX)

    notice = NOTICE[lang].format(
        original=ORIGINAL, index=INDEX, edit=EDIT.format(code=lang))
    dir_attr = ' dir="rtl"' if lang in RTL else ''
    # Corrections sent by readers are welcome and kept: the generator refuses to
    # overwrite a file that was edited after generation (see main below).
    header = ('<!-- First generated from README.md, then improved by contributors.\n'
              '     Wording fixes are welcome here. Content changes belong in README.md. -->\n')
    if dir_attr:
        header += f'<div{dir_attr}>\n\n'
    header += f'> [!NOTE]\n> {notice}\n\n'

    out = header + body
    if not out.endswith('\n'):
        out += '\n'
    if dir_attr:
        out += '\n</div>\n'

    dest = os.path.join(REPO, 'i18n', f'README.{lang}.md')
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    open(dest, 'w', encoding='utf-8').write(out)
    return dest, len(out)


def source_hash():
    src = open(os.path.join(REPO, 'README.md'), 'rb').read()
    return hashlib.sha256(src).hexdigest()


def write_state(lang, output_sha):
    """Record the README revision a translation came from, and its own checksum.

    The output checksum is what tells a later run whether a human improved the
    file in the meantime.
    """
    path = os.path.join(REPO, 'i18n', '.translation-state.json')
    state = {}
    if os.path.exists(path):
        state = json.load(open(path, encoding='utf-8'))
    state[lang] = {'source_sha256': source_hash(), 'output_sha256': output_sha}
    json.dump(dict(sorted(state.items())), open(path, 'w', encoding='utf-8'), indent=2)
    open(path, 'a', encoding='utf-8').write('\n')


def has_human_edits(lang):
    """True when the published file no longer matches what the generator last wrote."""
    path = os.path.join(REPO, 'i18n', f'README.{lang}.md')
    state_path = os.path.join(REPO, 'i18n', '.translation-state.json')
    if not os.path.exists(path) or not os.path.exists(state_path):
        return False
    recorded = json.load(open(state_path, encoding='utf-8')).get(lang, {}).get('output_sha256')
    if not recorded:
        return False
    current = hashlib.sha256(open(path, 'rb').read()).hexdigest()
    return current != recorded


if __name__ == '__main__':
    lang = sys.argv[1]
    slices_dir = sys.argv[2]
    force = '--force' in sys.argv

    if has_human_edits(lang) and not force:
        print(f'refusing to overwrite i18n/README.{lang}.md: it was edited after the last '
              f'generation, so regenerating would throw away a contributor fix.\n'
              f'Port the fix into the HARMONIZE table of this script, then rerun with '
              f'--force.', file=sys.stderr)
        sys.exit(1)

    dest, size = assemble(lang, slices_dir)
    write_state(lang, hashlib.sha256(open(dest, 'rb').read()).hexdigest())
    print(f'wrote {dest} ({size} chars)')
