# Run Yashasvini's Portfolio Locally

This ZIP contains the complete portfolio source used for the approved website,
including the final introduction video, poster, resume, certificates, images,
responsive layouts, light/dark themes, and interactions.

## Requirements

- Node.js 22.13 or newer (Node.js 22 LTS is recommended)
- npm, which is included with Node.js
- A current version of Chrome, Edge, Firefox, or Safari

No database, API key, or environment file is required to view the portfolio.

## Windows (PowerShell or VS Code Terminal)

1. Extract the ZIP completely.
2. Open the extracted `Yashasvini-Portfolio` folder in VS Code.
3. Open **Terminal > New Terminal**.
4. Check Node.js:

   ```powershell
   node -v
   npm -v
   ```

5. Install the project packages:

   ```powershell
   npm install
   ```

6. Start the portfolio:

   ```powershell
   npx vite
   ```

7. Open the local address shown in the terminal, normally:

   `http://localhost:5173/`

## macOS or Linux

From a terminal opened inside the extracted `Yashasvini-Portfolio` folder, run:

```bash
node -v
npm install
npx vite
```

Then open `http://localhost:5173/`.

## Stopping the Website

Return to the terminal and press `Ctrl + C`.

## Important Notes

- Do not open the source files directly and do not use the VS Code Live Server
  extension. This project must be run with Vite.
- If `vite is not recognized`, make sure `npm install` completed successfully,
  then use `npx vite` exactly as shown above.
- The site requests unmuted video playback first. Some browsers enforce an
  audible-autoplay policy; when they do, the first click/tap or the sound button
  immediately starts the introduction with sound.
- Keep the `public` folder in the project. It contains the video, resume,
  certificates, and other required website assets.
- Changes to the source are refreshed automatically while Vite is running.

