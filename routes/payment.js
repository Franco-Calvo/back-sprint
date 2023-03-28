import mercadopago from "mercadopago";
import express from "express";
import cors from "cors";

let router = express.Router();

mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY});

router.post("/", cors(), (req, res) => {
  const button = req.body;
  let preference = {
    items: [
      {
        id: button.id,
        title: button.title,
        currency_id: "ARS",
        unit_price: button.price,
        quantity: 1,
        picture_url: "https://imgur.com/anrrNbs",
      },
    ],
    back_urls: {
      success: "http://localhost:3000",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).json({response}))
    .catch((error) => res.status(400).json({error: error.message}));
});

export default router;
