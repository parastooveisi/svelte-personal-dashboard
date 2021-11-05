import { writable } from "svelte/store";

export type Notification = {
  type: string;
  message: string;
  title: string;
}

export const notifications = writable(
  [
    { type: "info", message: "Here's some info", title: "Info"},
    { type: "warning", message: "You've been warned!", title: "Warning"},
    { type: "error", message: "Error!!!", title: "Error"}
  ]
);
