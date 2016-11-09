import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import config from './../config'

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(config.APIKEY);
const app = express()

app.use(express.static('build/js'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/send/mail', (req, res) => {
  // ==============================
  // SENGRID ~ EMAIL
  // ==============================

  //Send email to user when they submit
  // const fromEmail = new helper.Email('noreply@structured-social.com');
  // const toEmail = new helper.Email(req.body.email);
  // const subject = 'Hello from Structured Social!';
  // const content = new helper.Content('text/plain', 'Welcome to Structured Social!');
  // const mail = new helper.Mail(fromEmail, subject, toEmail, content);
  // const request = sg.emptyRequest({
  //   method: 'POST',
  //   path: '/v3/mail/send',
  //   body: mail.toJSON(),
  // });
  //
  // sg.API(request, (err, res) => { // eslint-disable-line
  //   console.log(res.statusCode); // eslint-disable-line
  //   console.log(res.body); // eslint-disable-line
  //   console.log(res.headers); // eslint-disable-line
  //   console.log(err); // eslint-disable-line
  // });

  //Send user info to owner
  const to_Email = new helper.Email('akiba.chie@gmail.com');
  const from_Email = new helper.Email('noreply@structured-social.com');
  const subject_Line = 'Info from ' + req.body.fullName;
  const content_info = ('text/plain', {
    'fullName: ': req.body.fullName,
    'email: ': req.body.email,
    'Instagram: ':git stat req.body.Instagram
  });
  const userInfo = new helper.Mail(from_Email, subject_Line, to_Email, content_info);
  const info = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: userInfo.toJSON(),
  });

  sg.API(info, (err, res) => { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });

  res.sendStatus(200)
})

app.listen(3001, () => console.log('SERVER running on port 3001'));
