export default function handler(req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'gl694414@gmail.com',
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
    secure: true,
  });
  const mailData = {
    from: 'gl694414@gmail.com',
    to: process.env.NEXT_PUBLIC_MY_EMAIL,
    subject: `Message From ${req.body.name}`,
    text: +' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
