#!/usr/bin/env bash
# Ajoute rétroactivement un asset bubble-card.zip aux anciennes releases GitHub
# qui n'en ont pas, pour que le "redownload" d'une ancienne version via HACS
# (hacs.json en zip_release) continue de fonctionner.
#
# Le zip de chaque tag contient les fichiers dist/ DE CE TAG (les anciennes
# versions ne chargent pas de traductions, donc pas de dossier translations/).
#
# Prérequis : brew install gh && gh auth login
# Usage :     .github/backfill-release-zips.sh [motif-de-tag]
#             (défaut : v* ; ex. "v3.*" pour se limiter à la série 3)

set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

PATTERN="${1:-v*}"
WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

added=0 skipped=0 missing=0

for tag in $(git tag --list "$PATTERN" --sort=creatordate); do
  # Une release GitHub existe-t-elle pour ce tag ?
  if ! gh release view "$tag" --json assets --jq '.assets[].name' > "$WORKDIR/assets" 2>/dev/null; then
    missing=$((missing + 1))
    continue
  fi
  if grep -qx "bubble-card.zip" "$WORKDIR/assets"; then
    skipped=$((skipped + 1))
    continue
  fi

  stage="$WORKDIR/$tag"
  mkdir -p "$stage"
  if ! git show "$tag:dist/bubble-card.js" > "$stage/bubble-card.js" 2>/dev/null; then
    echo "SKIP $tag : pas de dist/bubble-card.js dans ce tag"
    missing=$((missing + 1))
    continue
  fi
  git show "$tag:dist/bubble-card.js.LICENSE.txt" > "$stage/bubble-card.js.LICENSE.txt" 2>/dev/null || true
  git show "$tag:dist/bubble-pop-up-fix.js"      > "$stage/bubble-pop-up-fix.js"      2>/dev/null || true
  # Les tags livrant un dossier translations/ (releases récentes) l'embarquent aussi.
  if git ls-tree -d "$tag" dist/translations > /dev/null 2>&1 && [ -n "$(git ls-tree "$tag" dist/translations 2>/dev/null)" ]; then
    mkdir -p "$stage/translations"
    git archive "$tag" dist/translations | tar -x -C "$WORKDIR" && \
      mv "$WORKDIR/dist/translations/"* "$stage/translations/" 2>/dev/null || true
    rm -rf "$WORKDIR/dist"
  fi

  (cd "$stage" && zip -qr bubble-card.zip . -x bubble-card.zip)
  gh release upload "$tag" "$stage/bubble-card.zip"
  echo "OK   $tag : bubble-card.zip ajouté"
  added=$((added + 1))
done

echo
echo "Ajoutés: $added | Déjà présents: $skipped | Sans release/dist: $missing"
