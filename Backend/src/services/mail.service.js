const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendContactMail = async ({ to, fromName, fromEmail, subject, message }) => {
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    replyTo: fromEmail,
    subject: `[Trouve ton artisan] ${subject}`,
    text: `
Nom : ${fromName}
Email : ${fromEmail}

Message :
${message}
    `.trim(),
  });
};

module.exports = {
  sendContactMail,
};