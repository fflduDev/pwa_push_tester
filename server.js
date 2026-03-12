const express = require('express');
const webpush = require('web-push');

const app = express();
app.use(express.json());
app.use(express.static('.'));

webpush.setVapidDetails(
  'mailto:jkramer@fairfield.edu',
  'BDtSkJzpBEd_SqVbjyrJuXhuONQDkNDHaQoPIuhn5Ep4hwkEq3Pf3rzx0wuEIfZfDSRmhmJtDdtmy9V0l1uBmeI',
  '8J9F6c2f6CrAUFmaD2fAfyfJwYCVHPBgigNCHh4RxMI'
);

let savedSub;

app.post('/subscribe', (req, res) => {
  savedSub = req.body;
  console.log('Subscription saved:', JSON.stringify(savedSub).slice(0, 80) + '...');
  res.sendStatus(200);
});

app.post('/send', async (req, res) => {
  if (!savedSub) {
    console.error('No subscription saved — client must subscribe first');
    return res.status(400).send('No subscription');
  }
  try {
    await webpush.sendNotification(savedSub, 'Hello from server!');
    console.log('Push sent successfully');
    res.sendStatus(200);
  } catch (err) {
    console.error('Push failed:', err.statusCode, err.message);
    res.status(500).send(err.message);
  }
});

app.listen(3000, '0.0.0.0', () => console.log('Server running on http://localhost:3000'));
