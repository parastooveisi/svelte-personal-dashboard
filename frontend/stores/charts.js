/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import { writable } from "svelte/store";

export const charts = writable(
  [
    { name: "Doughnut" },
    { name: "Bar" },
    { name: "Line" },
]);
