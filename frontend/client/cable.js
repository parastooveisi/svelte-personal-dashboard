// frontend/client/cable.js
import { createConsumer } from "@rails/actioncable";

let consumer;

const createChannelSubscription = (...args) => {
  if (!consumer) {
    consumer = createConsumer();
  }

  console.info(...args);

  return {
    consumer,
    subscription: consumer.subscriptions.create(...args),
  };
};

export default createChannelSubscription;
