import { writable } from "svelte/store";

export type Chart = {
  name: 'Bar' | "Line" | "Doughnut"
}

export const charts = writable<Chart[]>(
  [
    { name: "Doughnut" },
    { name: "Bar" },
    { name: "Line" },
  ]
);
