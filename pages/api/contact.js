export default function handler(req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'gl694414@gmail.com',
      pass: '0i3rNA6Zy2G3',
    },
    secure: true,
  });
  const mailData = {
    from: 'gl694414@gmail.com',
    to: 'info@gabriel-lellouche.com',
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
