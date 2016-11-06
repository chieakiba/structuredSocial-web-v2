import express from 'express'
import bodyParser from 'body-parser'
import { api_key, domain } from './api'
import Mailgun from 'mailgun-js'
import cors from 'cors'

const app = express()
const corsOptions = {
  origin: 'http:localhost:3000'
}

app.use(bodyParser.json());
app.use(express.static('build'));
app.use(cors(corsOptions))


app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('localhost:3001/send', (req, res) => {
  const email = req.body.email;
  console.log('what is email', email)
  const mailgun = new Mailgun({apiKey: api_key, domain: domain});
  const dataToUser = {
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
    res.send('submitted', {email: email})
  });
  // mailgun.messages().send(dataToSS, function (error, body) {
  //   console.log(body);
  // });

})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`SERVER running on port ${PORT}`));
