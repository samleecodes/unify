const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest(helloWorldHandler);

async function helloWorldHandler(req, res) {
  functions.logger.log('Hello world handler called');
  res.send('Hello, World! ✨');
}
