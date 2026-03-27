# Developer guide

This guide explains how to test changes to Bubble Card during development.

---

### 1. Install dependencies

```bash
npm install
```

---

### 2. Make your changes

Edit the source files you want to test.

---

### 3. Set up a Home Assistant instance for testing

You need a Home Assistant instance to test your changes. Two options:

#### Option A - Dedicated HAOS VM (recommended)

Using a local virtual machine keeps your development work isolated from any real setup. Follow the [official Home Assistant installation guide](https://www.home-assistant.io/installation/#install-home-assistant-on-linux) to spin up an HAOS instance.

#### Option B - Your personal instance

You can also test directly against your own instance. The risk is low, since you are only replacing a frontend resource file.

---

Once your instance is running, you can for example install the [Samba share](https://github.com/home-assistant/addons/tree/master/samba) app (formerly known as add-on) to get file access to the `config/www` folder over the network:

1. In Home Assistant go to **Settings → Apps → Install app**
2. Search for **Samba share** and install it
3. Configure and start it, your config folder will be available on your local network

> [!important]
> **If Bubble Card is already installed via HACS**, remove it first to avoid conflicts:
> go to **HACS**, find Bubble Card, click the three-dot menu and select **Remove**, then clear your browser cache.

---

### 4. Configure the build target (`.env`)

Local paths are stored in a `.env` file that is gitignored and never committed.

1. Copy `.env.example` to `.env`
2. Set `HA_PATH` to the `www` folder of your instance (mounted via Samba):

```bash
cp .env.example .env
```

Then edit `.env`:

```env
# macOS / Linux (Samba share mounted as a network volume)
HA_PATH=/Volumes/config/www

# Windows (Samba share mapped as a network drive)
# HA_PATH=\\homeassistant\config\www
```

If `HA_PATH` is not set, dev builds fall back to the local `./www` folder.

---

### 5. Build and deploy

After making your changes, run:

```bash
npm run dist
```

This builds:
- production files to `dist/`
- development files to `HA_PATH` (or `./www` if not set)

---

### 6. Register the resource in Home Assistant

If this is your first time using a local build, you need to register the file as a dashboard resource:

1. Open your dashboard and click the **pencil icon** (Edit dashboard) in the top-right corner
2. Click the **three-dot menu** and select **Manage resources**
3. Click **Add resource**
4. Paste: `/local/bubble-card.js?v=1`
5. Select **JavaScript module** and confirm

On subsequent builds, simply **clear the cache** in your browser.

> [!tip]
> **If you are testing in Chrome**, enable **"Disable cache while DevTools is open"** in **DevTools → Settings (F1) → Preferences**. This ensures every page reload fetches the latest built file automatically.

---

### 7. Commit for contribution

When your change is ready:

```bash
git add .
git commit -m "Your commit message"
```

Include source changes and generated distribution files when required by the project release process.

---

### 8. Push your branch

```bash
git push origin your-branch-name
```

---

### 9. Open a pull request

Open a PR from your branch/fork to the main repository.

---

### Thank you so much for your help! 🍻
