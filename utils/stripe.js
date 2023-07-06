import Stripe from 'stripe'
const secretKeys = require('../secrets')
export const stripe = new Stripe(secretKeys.STRIPE_SECRET_KEY)

