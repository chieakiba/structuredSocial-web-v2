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

//Send email to the owner and user when the user submits the request invite form
app.post('/send/invitemail', (req, res) => {
  // ==============================
  // SENGRID ~ EMAIL
  // ==============================

  //Send email to user when they submit - uncomment if you want to use this
  const fromEmail = new helper.Email('noreply@structured-social.com');
  const toEmail = new helper.Email(req.body.email);
  const subject = 'Hello from Structured Social!';
  const content = new helper.Content('text/html', `Hi ${req.body.firstName},<br><br>Thanks for checking out Structured Social. Our team will review your application and contact you soon.`);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);
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

  //Send invited user info to owner
  const to_InviteEmail = new helper.Email(config.email);
  const from_InviteEmail = new helper.Email(req.body.email);
  const subject_Invite = 'New form submission from ' + req.body.firstName + ' ' + req.body.lastName;
  const invitedContent = new helper.Content('text/html',
    'Name: ' + req.body.firstName + ' ' + req.body.lastName +
    '<br>Instagram: ' + req.body.Instagram +
    '<br>Email: ' + req.body.email
  );
  const userInviteInfo = new helper.Mail(from_InviteEmail, subject_Invite, to_InviteEmail, invitedContent);
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
  res.sendStatus(200)
})

//Send email to the owner and user when the user submits the request invite form
app.post('/send/referredmail', (req, res) => {
  // ==============================
  // SENGRID ~ EMAIL
  // ==============================

  //Send email to user when they submit - uncomment if you want to use this
  const from_Email = new helper.Email('noreply@structured-social.com');
  const to_Email = new helper.Email(req.body.email);
  const subject_ = 'Hello from Structured Social!';
  const content_ = new helper.Content('text/html', `Hi ${req.body.firstName},<br><br>Thanks for checking out Structured Social. Our team will review your application and contact you soon.`);
  const mail_ = new helper.Mail(from_Email, subject_, to_Email, content_);
  const request_ = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail_.toJSON(),
  });

  sg.API(request_, (err, res) => { // eslint-disable-line
    console.log(res.statusCode); // eslint-disable-line
    console.log(res.body); // eslint-disable-line
    console.log(res.headers); // eslint-disable-line
    console.log(err); // eslint-disable-line
  });

  //Send referred user info to owner
  const to_RefEmail = new helper.Email(config.email);
  const from_RefEmail = new helper.Email(req.body.email);
  const subject_Referred = 'New form submission from ' + req.body.firstName + ' ' + req.body.lastName;
  const referredContent = new helper.Content('text/html',
    'Name: ' + req.body.firstName + ' ' + req.body.lastName +
    '<br>Instagram: ' + req.body.Instagram +
    '<br>Email: ' + req.body.email +
    '<br>Referred from: ' + req.body.referee
  );
  const referredUserInfo = new helper.Mail(from_RefEmail, subject_Referred, to_RefEmail, referredContent);
  const referredInfo = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: referredUserInfo.toJSON(),
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
