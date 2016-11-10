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

  //Send email to user when they submit - uncomment if you want to use this
  // const fromEmail = new helper.Email('noreply@structured-social.com');
  // const toEmail = new helper.Email(req.body.email);
  // const subject = 'Hello from Structured Social!';
  // const content = new helper.Content('text/plain', 'Welcome to Structured Social! Our team will review your application and contact you soon.');
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

  //Send invited user info to owner
  const to_Email = new helper.Email(config.email);
  const from_Email = new helper.Email(req.body.email);
  const subject_Line = 'New form submission from ' + req.body.firstName + ' ' + req.body.lastName;
  const invitedContent = new helper.Content('text/html',
    'Name: ' + req.body.firstName + ' ' + req.body.lastName +
    ' Instagram: ' + req.body.Instagram +
    ' Email: ' + req.body.email
  );
  const userInviteInfo = new helper.Mail(from_Email, subject_Line, to_Email, invitedContent);
  const invitedInfo = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: userInviteInfo.toJSON(),
  });

  sg.API(invitedInfo, (err, res) => { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });

  //Send referred user info to owner
  const toEmail = new helper.Email(config.email);
  const fromEmail = new helper.Email(req.body.email);
  const subject = 'New form submission from ' + req.body.firstName + ' ' + req.body.lastName;
  const referredContent = new helper.Content('text/html',
    'Name: ' + req.body.firstName + ' ' + req.body.lastName +
    ' Instagram: ' + req.body.Instagram +
    ' Email: ' + req.body.email +
    ' Referred from: ' + req.body.referee
  );
  const userReferredInfo = new helper.Mail(fromEmail, subject, toEmail, referredContent);
  const referredInfo = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: userReferredInfo.toJSON(),
  });

  sg.API(referredInfo, (err, res) => { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });


  res.sendStatus(200)
})

app.listen(3001, () => console.log('SERVER running on port 3001'));
