# Meditation App (React Native + Expo)

A simple, calming meditation app built with Expo, React Native, Expo Router and TypeScript. The app provides guided meditations, a break timer, user profile, and an About page describing the team and mission.

This README explains what the project does and how to run it locally.

---



## Functionality / Screens

The app contains a few main screens (tabs):

- Home (Recommended / Search / Filters) — lists meditations from `src/data.ts`, supports search and filter by type (Audio, Video, Pro).
- Break — includes a simple timer to set a break session with presets and progress animation.
- About — app mission, team, contact details and stats (redesigned to include images and content).
- Profile — a personal area showing user stats and goals.
- Search — placeholder screen for future search UI.
- Meditation detail — per-meditation details are available via `src/app/meditationScreen/[id].tsx`.



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



