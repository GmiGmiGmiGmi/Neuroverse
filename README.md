# Control Bionics Support Hub V3.0

This build combines the existing NeuroStrip visual support hub with a new NeuroNode + AAC support area.

## NeuroStrip
Retains the V2.4 NeuroStrip setup, visual guides, pathways, fullscreen viewer, and step carousels.

## NeuroNode
Built from:
- NeuroNode User Guide Rev M (detailed technical source)
- Control Bionics Trial Cards (simplified Easy Read / frontline guides)

Includes:
- NeuroNode Duo quick start: iOS and Windows
- NeuroNode Trilogy quick start: iOS and Windows
- Overview and accessories
- EMG placement
- 3D Spatial control
- Bluetooth / Shake to Wake / Standby
- Signal and indicator lights
- Charging
- Electrode options, bezel and band
- Controller App Graph / Home
- Graph settings and scaling
- Profiles and Auto Calibration
- Grid 3 switch setup and HID F9
- Advanced settings, switch filtering, advanced switching, Speech Generation
- Power cycle, reset / Bluetooth scrub and re-pair

## Nero
Nero now routes both NeuroStrip and NeuroNode questions. This is still a free, rules-based assistant and does not require an API.

## GitHub Pages
1. Extract this ZIP.
2. Upload `index.html`, `app.js`, `styles.css`, `README.md`, and `asset-manifest.json` to your repository root.
3. Open/create the GitHub `assets` folder.
4. Upload every file inside this build's local `assets` folder into the GitHub `assets` folder.
5. Commit, wait for GitHub Pages to deploy, then refresh the site with Ctrl+F5.

Videos are intentionally excluded.


## V3.1 — Dual Mascot Context
- NeuroStrip content uses Nero.
- NeuroNode + AAC content uses Nodi.
- Mascot switches automatically when the user opens or scrolls into the relevant product area.
- "Ask Nero" dynamically becomes "Ask Nodi" in NeuroNode/AAC context.
- NeuroStrip retains Nero's idle / thinking / excited / proud expression behaviour.
- Nodi uses the canonical NeuroNode mascot image supplied by the user.
- Opening a NeuroNode guide automatically switches to Nodi; opening a NeuroStrip guide switches back to Nero.
- Nero/Nodi routing still works without an API.
