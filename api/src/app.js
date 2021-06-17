const express = require('express');
const cors = require('cors');

const sendEmail = require('../mail');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const userRoute = require('./routes/user.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

// app.post('/api/email', (req, res) => {
//     // send email here
//     const { email, text } = req.body;
//     console.log('Data: ', req.body);

//     sendEmail(email, text, function(err, data) {
//         if (err) {
//             res.status(500).json({ message: 'Internal error!' });
//         } else {
//             res.json({ message: 'Email sent!' });
//         }
//     });
//     res.json({ message: 'Message received!'})
// });

app.use(index);
app.use('/api/', userRoute);

module.exports = app;

