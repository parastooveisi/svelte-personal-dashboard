import { writable } from "svelte/store";

export type BarChartEntry = {
  year: number;
  income: number;
  expenses: number;
}

export const barChartData = writable([
  { year: 2021, income: 4000, expenses: 1000 },
  { year: 2020, income: 3888, expenses: 800 },
  { year: 2019, income: 3500, expenses: 1800 },
  { year: 2018, income: 2200, expenses: 4000 },
  { year: 2017, income: 2000, expenses: 1000 },
  { year: 2016, income: 2000, expenses: 1000 },
  { year: 2015, income: 2000, expenses: 1000 },
])
