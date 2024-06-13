"use client";
const Stripe = require('stripe');
const { NextResponse } = require('next/server');
import store from 'store2';
import { updatePayment } from './path/to/actions';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.POST = async function (req) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get('Stripe-Signature');

  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleTimeString();

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    console.log('Event', event?.type);

    if (event.type === 'charge.succeeded') {
      const charge = event.data.object;

      const student = store.get("user_id");
      const topic = store.get("topic")._id;
      const email = charge.billing_details?.email;
      const amount = charge.amount;
      const paid = charge.paid;

      console.log(
        email, // email
        amount, // amount
        paid, // paid status
        JSON.stringify(res), // payment info
        res?.type, // type
        String(timeString), // time
        String(dateTime), // date
        charge.receipt_email, // email
        charge.receipt_url, // url
        JSON.stringify(charge.payment_method_details), // Payment method details
        JSON.stringify(charge.billing_details), // Billing details
        charge.currency // Currency
      );

      const paymentData = {
        email,
        amount,
        paid
      };

      try {
        const updateResponse = await updatePayment(student, topic, paymentData);
        console.log("Payment updated successfully:", updateResponse);
      } catch (updateError) {
        console.error("Error updating payment:", updateError);
      }
    }

    return NextResponse.json({ status: "success", event: event.type, response: res });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ status: "Failed", error: error.toString() });
  }
};
