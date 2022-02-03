export default async function handler(req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'gl694414@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });
  const mailData = {
    from: 'gl694414@gmail.com',
    to: process.env.MY_EMAIL,
    subject: `Message From ${req.body.name}`,
    text: +' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
  });

  res.status(200).send('success');
}