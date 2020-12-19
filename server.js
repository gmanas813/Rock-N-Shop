const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce=require('express-sslify');
const dotenv = require('dotenv');
dotenv.config();

const STRIPE_SECRET_KEEY=process.env.STRIPE_SECRET_KEY;

const stripe = require('stripe')(STRIPE_SECRET_KEEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({trustProtoHeader:true}));
app.use(cors());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/service-worker.js',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'..','build','service-worker.js'));
})
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'inr',
    description:'pay'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
        console.log(stripeErr);
      res.status(500).send({ error: stripeErr });
    } else {
        console.log('FIne');
      res.status(200).send({ success: stripeRes });
    }
  });
});