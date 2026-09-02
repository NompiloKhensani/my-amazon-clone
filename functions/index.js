const { onRequest } = require("firebase-functions/https");
const { defineSecret } = require("firebase-functions/params");

const express = require("express");
const cors = require("cors");
const stripeSecretKey = defineSecret("STRIPE_SECRET_KEY");

const stripe = require("stripe");

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).send("Hello World!")
);

app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;

    const stripeClient = stripe(stripeSecretKey.value());

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: total,
      currency: "zar",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Unable to create payment intent",
    });
  }
});

exports.api = onRequest(
  {
    secrets: [stripeSecretKey],
  },
  app
);
