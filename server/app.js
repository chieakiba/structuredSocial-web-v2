var express = require('express')
var bodyParser = require('body-parser')
var { api_key, domain } = require('./api')
var Mailgun = require('mailgun-js')
var cors = require('cors')

var app = express()
var corsOptions = {
  origin: 'http:localhost:3000'
}

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors(corsOptions))


app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/send', (req, res) => {
  var email = req.body.email;
  var mailgun = new Mailgun({apiKey: api_key, domain: domain});
  var dataToUser = {
    from: 'stefan@structured-social.com',
    to: email,
    subject: 'Thank you for your submission',
    text: 'We received your submission and will get back to you as soon as we can.'
  };
  // const dataToSS = {
  //   from: user.form.values.email,
  //   to: 'stefan@structured-social.com',
  //   subject: user.form.values.fullName + '\'s form submission',
  //   text: {
  //     email: user.form.values.email,
  //     Instagram: user.form.values.Instagram,
  //     fullName: user.form.values.fullName
  //   }
  // }

  mailgun.messages().send(dataToUser, (error, body) => {
    console.log(body);
  });
  // mailgun.messages().send(dataToSS, function (error, body) {
  //   console.log(body);
  // });

})
