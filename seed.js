const Stripe = require('stripe');
const products = require('./products');
const secretKeys = require('./secrets')
const stripe = new Stripe(secretKeys.STRIPE_SECRET_KEY);

(async () => {
  for (const product of products) {
    const stripeProduct = await stripe.products.create({
      name: product.name,
      type: 'good',
      images: [product.image],
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount_decimal: product.price,
      currency: product.currency,
    });

    console.log(`Product: ${stripeProduct.name} (${stripeProduct.id})`);
    console.log(`Price: ${stripePrice.unit_amount_decimal / 100} ${stripePrice.currency}`);
  }
})();
