# Meditation App (React Native + Expo)

A simple, calming meditation app built with Expo, React Native, Expo Router and TypeScript. The app provides guided meditations, a break timer, user profile, and an About page describing the team and mission.

This README explains what the project does and how to run it locally.

---

## Quick summary

- Platform: Expo (React Native)
- Language: TypeScript
- Routing: expo-router (file-based routing)
- Styling: NativeWind / Tailwind-style classes
- Entry files: `index.ts` (registers `/App`), app screens live under `src/app`

---

## Functionality / Screens

The app contains a few main screens (tabs):

- Home (Recommended / Search / Filters) — lists meditations from `src/data.ts`, supports search and filter by type (Audio, Video, Pro).
- Break — includes a simple timer to set a break session with presets and progress animation.
- About — app mission, team, contact details and stats (redesigned to include images and content).
- Profile — a personal area showing user stats and goals.
- Search — placeholder screen for future search UI.
- Meditation detail — per-meditation details are available via `src/app/meditationScreen/[id].tsx`.

Other notable components:

- `src/components/MeditationCard.tsx` — card UI used in lists.
- `src/components/NavButtom.tsx` — bottom navigation used inside screens (some routes use expo-router tabs instead).

---

## Prerequisites

- Node.js (16+ recommended)
- npm or yarn
- Expo CLI (optional but helpful): `npm install -g expo-cli` or use `npx`
- A mobile device or emulator (Expo Go app or Android/iOS emulator)

---

## Install

Open a terminal in the project root and run:

```powershell
npm install
# or
# yarn
```

This installs all dependencies listed in `package.json`.

---

## Run the app (development)

Start the Expo dev server:

```powershell
npx expo start
# or if you have the global CLI
# expo start
```

Then open the project in Expo Go on a device (scan the QR code), or run on an emulator from the Expo UI.

You can also run on a connected Android device or emulator:

```powershell
npx expo run:android
```

And for iOS simulators (macOS only):

```bash
npx expo run:ios
```

---

## Type checking and linting

To run TypeScript type checks (no emit):

```powershell
npx tsc --noEmit
```

If you see JSX/TSX related errors (for example an older error mentioning the `-jsx` flag), ensure `tsconfig.json` contains a compatible JSX mode for React Native. This repository uses a `tsconfig.json` that extends `expo/tsconfig.base` and sets the JSX option to `react-native`:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "jsx": "react-native"
  }
}
```

If you run into `Cannot find module './App'` from `index.ts`, the quick fix is to add a small `App.tsx` in the project root that re-exports your top-level app component (for example `src/app/index`), or update `index.ts` to import the correct path.

---

## Project structure (important files)

```
/ (project root)
  App.tsx                 # small root shim (may exist)
  index.ts                # expo registerRootComponent
  tsconfig.json
  package.json
  src/
    data.ts               # meditation data
    app/                  # expo-router screens (file-based)
      (tabs)/             # tab screens used by the app
        index.tsx         # Home tab
        break.tsx         # Break timer
        about.tsx         # Redesigned About page
        profile.tsx
        search.tsx
      meditationScreen/   # detail page for meditations
        [id].tsx
    components/           # shared UI components
      MeditationCard.tsx
      NavButtom.tsx
```



