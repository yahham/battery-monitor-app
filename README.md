# BatteryMonitorApp

Battery monitoring app built with React Native & Expo.

## Overview

A smart battery monitoring application that provides real-time battery status and intelligent power management recommendations.

**Why React Native/Expo?**

- **Lighter** development environment (vs **Android Studio**)

## Features

- **Real-time battery monitoring** with live updates
- **Visual indicators**: Dynamic icons, colors, and progress bar
- **Smart recommendations** based on charging state
- **Automatic dark mode** support
- **Detailed analytics** page with power-saving tips

## Installation

### Prerequisites

- Node.js
- Expo Go app on your phone, OR Android Emulator/iOS Simulator

### Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Start app
npx expo start --clear
```

**Important:** Always use `--legacy-peer-deps` flag and React 19.1.0 (NOT 19.2.0)

## Running the App

### Option 1: Physical Device (Recommended)

1. Install Expo Go app
2. Run: `npx expo start --clear`
3. Scan QR code

### Option 2: Emulator

```bash
npx expo start --clear
# Press 'a' for Android or 'i' for iOS
```

## Project Structure

```text
BatteryMonitorApp/
├── app/                      # Screens (Expo Router)
│   ├── index.jsx            # Home screen
│   ├── about.jsx            # About page
│   └── battery-details.jsx # Details screen
├── components/               # Reusable UI components
│   ├── BatteryStatus.jsx    # Main battery widget
│   └── Themed*.jsx          # Theme-aware components
├── hooks/
│   └── useBatteryMonitor.js # Battery logic
├── constants/
│   └── Colors.js            # Theme colors
└── assets/                  # Images & icons
```

## How It Works

### Native Android vs Our Implementation

| Concept | Native Android | React Native/Expo |
|---------|---------------|-------------------|
| **Core Component** | `BroadcastReceiver` | Custom Hook + `expo-battery` |
| **Event Handling** | `ACTION_BATTERY_CHANGED` intent | `addBatteryLevelListener` |
| **Lifecycle** | `registerReceiver` / `unregisterReceiver` | `useEffect` cleanup |
| **Platform** | Android only | iOS + Android |

### Functional Equivalence

Despite different implementation, achieves **identical functionality** to native spec:

- Real-time battery monitoring
- Charging state detection  
- Low battery warnings
- Memory leak prevention
- Contextual recommendations
