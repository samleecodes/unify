const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.onMessage = functions.firestore.document('messages/{message}').onCreate(notifyViaEmail);

async function notifyViaEmail(snap, _context) {
  const data = snap.data();

  try {
    const mailFrom = functions.config().mail.from;
    const mailPwd = functions.config().mail.pwd;
    const mailTo = functions.config().mail.to;

    const mailOptions = {
      from: mailFrom,
      to: mailTo,
      subject: 'New Message',
      html: `<p>${data.message}</p>`
    };

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      auth: {
        user: mailFrom,
        pass: mailPwd
      }
    });

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(err);
  }
}
