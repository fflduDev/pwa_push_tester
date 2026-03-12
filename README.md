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
