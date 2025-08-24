# Developer Guide

This guide explains how to test changes to BubbleCard during development.

## Testing BubbleCard Changes With Home Assistant

When making modifications to BubbleCard, follow this workflow to test your changes:

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Distribution

After making your changes to the source files, build the distribution:

```bash
npm run dist
```

This will compile your changes and update the files in the `dist/` directory, including `bubble-card.js`.

### 3. Commit Your Changes

Make sure to commit both your source changes and the built distribution files:

```bash
git add .
git commit -m "Your commit message"
```

**Important:** Always include the built `bubble-card.js` file in your commits, as this is what Home Assistant will actually use.

### 4. Push to Your Fork

Push your changes to your GitHub fork:

```bash
git push origin your-branch-name
```
### 5. Remove the Official Bubble Card

Be sure to remove any existing Bubble Card installations. If you previously
installed BubbleCard with HACS:

1. In HACS, search for "Bubble Card"
2. Click the three dots menu (⋮) and select "Remove"

### 6. Add Your Fork as a Custom Repository in HACS

To test your changes in Home Assistant:

1. Open Home Assistant and go to **HACS**
2. Click the three dots menu (⋮) in the top right corner
3. Select **Custom repositories**
4. Add your fork URL: `https://github.com/your-user/Bubble-Card`
5. Set the category to **Dashboard**
6. Click **Add**
7. Reload Home Assistant


### 7. Install Your Development Version

1. In HACS, search for "Bubble Card"
2. You should now see your fork listed as an option
3. Install it (or update if you already have it installed)
4. Restart Home Assistant or clear your browser cache
5. Your changes should now be active
