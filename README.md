# Push Notification Test

## How to Run

1. **Start the server**
   ```bash
   node server.js
   ```
   App will be running on port 3000.

2. **Open a new terminal and run ngrok**
   ```bash
   ngrok http 3000
   ```
   This generates a temporary public `https://` URL.

3. **On your phone**
   - Open the ngrok URL in Safari (iOS) or Chrome (Android)
   - Save it to your home screen: **Share → Add to Home Screen → Add**
   - Launch the app from your home screen

4. **Subscribe and test**
   - Tap **Subscribe** and allow notifications
   - Tap **Send Push** — you should receive a push notification



## index.html — the front-end with Subscribe and Send Push buttons, error logging, and PWA meta tags

## server.js — the Node/Express backend that handles subscriptions and sends pushes via web-push

## sw.js — the service worker that listens for push events and displays the notification

## manifest.json — makes the site installable as a PWA (required for iOS push support)

## package.json — lists express and web-push as dependencies
