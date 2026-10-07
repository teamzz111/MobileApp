# MobileApp

A React Native + TypeScript app for browsing and creating users against a REST API. It is a compact reference for a modern RN setup: server state handled by TanStack Query, a custom animated bottom tab bar drawn with SVG, d3-shape and Reanimated, and Material Design components from React Native Paper.

## Features

- **User list.** Fetches users from the API and renders them as cards with avatar, name and description. Includes a skeleton loading state and pull-to-refresh.
- **Create user.** A form with name and description, with validation (the submit button stays disabled until both are filled), a loading state on the button, and success and error toasts.
- **Custom animated tab bar.** The curved notch is generated with `d3-shape` (`curveBasis`) and morphed between tabs with `react-native-redash` `interpolatePath`, while a Reanimated circle indicator follows the active tab. Safe-area insets are taken into account.
- **Typed API layer.** A shared Axios instance with a base URL from `.env` (`react-native-dotenv`), a small `UsersService`, and typed request/response models.
- **Navigation.** A native stack plus bottom tabs (React Navigation 6).

## Tech stack

| Area | Library |
| --- | --- |
| Framework | React Native 0.73, React 18, TypeScript 5 |
| Server state | @tanstack/react-query 5 (`useQuery`, `useMutation`) |
| HTTP | Axios |
| Navigation | @react-navigation/native-stack, @react-navigation/bottom-tabs |
| UI | react-native-paper 5, react-native-vector-icons, react-native-skeleton-component, react-native-toast-message |
| Animation and graphics | react-native-reanimated 3, react-native-svg, d3-shape, react-native-redash |
| Config | react-native-dotenv |
| Tooling | ESLint, Prettier, Jest |

## Project structure

```
src/
├── actions/
│   ├── http.ts              Axios instance (baseURL from API_URL)
│   └── user/                UsersService + request/response models
├── components/
│   ├── AnimatedCircle/      Active-tab indicator (Reanimated)
│   ├── CardUser/            User card (Paper Card + Avatar)
│   ├── CustomBottonTab/     Animated SVG tab bar
│   └── TabItem/
├── hooks/useTabs.tsx        Builds the curved tab-bar paths with d3-shape
├── pages/
│   ├── Users/               List with skeletons and pull-to-refresh
│   └── AddUser/             Create-user form (useMutation)
├── router/                  Stack navigator + bottom tabs
├── constants/, utils/       Screen size, SVG path helpers, types
App.tsx                      Providers (QueryClient, Navigation, Paper, Toast)
```

## API

The app expects a REST API with two endpoints:

| Method | Path | Body / Response |
| --- | --- | --- |
| `GET` | `/getUsers` | `[{ _id, name, description, img }]` |
| `POST` | `/createUser` | `{ name, description }` |

## Getting started

Requirements: Node.js 18 or later and a working [React Native environment](https://reactnative.dev/docs/environment-setup) (Android Studio and/or Xcode).

```bash
# 1. Install dependencies
yarn install            # or: npm install

# 2. Configure the API base URL
echo "API_URL=https://your-api.example.com" > .env

# 3. iOS only: install pods
cd ios && bundle install && bundle exec pod install && cd ..

# 4. Start Metro, then run the app
yarn start
yarn android            # or: yarn ios
```

Other scripts:

```bash
yarn lint               # ESLint
yarn test               # Jest
```

## Author

**Andrés Largo** ([@teamzz111](https://github.com/teamzz111)), 2024.
