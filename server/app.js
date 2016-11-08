import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import config from './../config'

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(config.API_KEY);
const app = express()

console.log('hello')
app.use(express.static('build/js'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

// app.use('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get('/send/mail', (req, res) => {
  res.json({
    msg: 'Why is this not working?'
  })
})

app.post('/send/mail', (req, res) => {
  const email = req.body
  console.log('what is req.body', req.body)
  res.send({
    msg: 'does this show?',
    email
  })

  // ==============================
  // SENGRID ~ EMAIL
  // ==============================

  const fromEmail = new helper.Email('noreply@structured-social.com');
  // const fromEmail = new helper.Email(config.email);
  const toEmail = new helper.Email(req.body.to);
  const subject = 'Hello from Structured Social!';
  const content = new helper.Content('text/plain', 'Welcome to Structured Social!');
  const mail = new helper.Mail(fromEmail, toEmail, subject, content);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, (err, res) => { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });
  // const dataToSS = {
  //   from: toEmail,
  //   to: fromEmail
  //   subject: user.form.values.fullName + '\'s form submission',
  //   text: {
  //     email: toEmail,
  //     Instagram: req.body.Instagram,
  //     fullName: req.body.fullName
  //   }
  // }
})

app.listen(3001, () => console.log('SERVER running on port 3001'));
