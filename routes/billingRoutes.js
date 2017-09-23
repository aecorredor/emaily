const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 credits for $5',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    return res.send(user);
  });
};
