<script lang="ts">
  // @ts-nocheck
  import * as Pancake from "@sveltejs/pancake";
  import { spring } from "svelte/motion";
  import { barChartData } from "../stores/barChartData";
  let data;

  barChartData.subscribe((value) => {
    data = value;
  });

  const maxExpense = Math.max(...data.map((d) => d.expenses));
  const year0 = Math.min(...data.map((d) => d.year));
  const year1 = Math.max(...data.map((d) => d.year));
  const maxIncome = Math.max(...data.map((d) => d.income));

  const years = data.map((d) => d.year);

  let el;
  let w = 320;

  function getIncome() {
    return years.map((year) => {
      const d = data.find((d) => d.year === year);
      return {
        x: year,
        y: d ? d.income : 0,
      };
    });
  }

  function getExpenses() {
    return years.map((year) => {
      const d = data.find((d) => d.year === year);
      return {
        x: year,
        y: d ? d.expenses : 0,
      };
    });
  }

  const x1 = spring();
  const x2 = spring();
  const income = spring();
  const expenses = spring();

  $: $x2 = year1;
  $: $x1 = year0;
  $: $income = getIncome();
  $: $expenses = getExpenses();
</script>

<div class="chart shadow-lg h-full" bind:this={el} bind:clientWidth={w}>
  <div class="background">
    <Pancake.Chart x1={$x1 - 0.5} x2={$x2} y1={0} y2={maxExpense}>
      <!-- men -->
      <Pancake.Columns data={$income} width={0.2}>
        <div class="column income" />
      </Pancake.Columns>

      <!-- women -->
      <Pancake.Columns data={$expenses} width={0.2}>
        <div class="column expenses" />
      </Pancake.Columns>
    </Pancake.Chart>
  </div>

  <div class="foreground">
    <Pancake.Chart x1={$x1 - 0.5} x2={$x2} y1={0} y2={maxIncome}>
      <Pancake.Grid horizontal count={6} let:value let:first>
        <div class="grid-line horizontal" />
        <span class="y label">{value}</span>
      </Pancake.Grid>

      <Pancake.Grid vertical ticks={years} let:value>
        <span class="x label">{value}</span>
      </Pancake.Grid>
    </Pancake.Chart>
  </div>
</div>

<style lang="postcss">
  .chart {
    position: relative;
    width: 100%;
    margin: 0 0 36px 0;
    @apply h-96;
  }

  @media (min-width: 1280px) {
    .chart {
      height: 100%;
    }
  }

  .background,
  .foreground {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2em 2em 3em 5em;
    box-sizing: border-box;
  }

  .grid-line {
    position: relative;
    display: block;
  }

  .grid-line.horizontal {
    width: 100%;
    left: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .label {
    position: absolute;
    font-size: 14px;
    color: #666;
    line-height: 1;
    white-space: nowrap;
  }

  .y.label {
    left: -4.2em;
    bottom: -0.5em;
    line-height: 1;
    text-align: right;
    width: 4em;
  }

  .x.label {
    width: 4rem;
    left: -2em;
    bottom: 5px;
    text-align: center;
  }

  .foreground .x.label {
    bottom: -22px;
  }

  .column {
    position: absolute;
    left: 0px;
    width: 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    border-right: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    height: 100%;
    opacity: 0.6;
    border-radius: 2px 2px 0 0;
  }

  .column.income {
    @apply bg-green-400;
    left: 100%;
  }
  .column.expenses {
    @apply bg-pink-400;
    left: 0;
  }
</style>
