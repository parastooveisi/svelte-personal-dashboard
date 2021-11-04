<script lang="ts">
  import * as Pancake from "@sveltejs/pancake";
  import { spring } from "svelte/motion";

  const data = [
    { year: 2021, income: 2000, expenses: 1000 },
    { year: 2020, income: 1300, expenses: 800 },
    { year: 2019, income: 3500, expenses: 1800 },
    { year: 2018, income: 2200, expenses: 4000 },
    { year: 2017, income: 2000, expenses: 1000 },
    { year: 2016, income: 2000, expenses: 1000 },
  ];

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
  console.log($income);
  $: size = w < 480 ? "small" : w < 640 ? "medium" : "large";

  const handle_pointerdown = (e) => {
    if (!e.isPrimary) return;

    const start_x = e.clientX;
    // const start_value = year;

    const handle_pointermove = (e) => {
      if (!e.isPrimary) return;

      const d = e.clientX - start_x;

      // const step = Math.min(10, d > 0 ? (window.innerWidth - start_x) / (year1 - start_value) : start_x / (start_value - year0));

      // const n = Math.round(d / step);
      // year = Math.max(year0, Math.min(year1, start_value + Math.round(n * 0.1) * 10));
    };

    const handle_pointerup = (e) => {
      if (!e.isPrimary) return;

      window.removeEventListener("pointermove", handle_pointermove);
      window.removeEventListener("pointerup", handle_pointerup);
    };

    window.addEventListener("pointermove", handle_pointermove);
    window.addEventListener("pointerup", handle_pointerup);
  };

  // const handle_resize = () => {
  //   // normally we'd just use bind:clientWidth={w} on the element,
  //   // but that fails in the REPL because of iframe restrictions
  //   w = el.clientWidth;
  // };

  // onMount(handle_resize);
</script>

<!-- <svelte:window on:resize={handle_resize} /> -->

<div class="chart {size}" bind:this={el} bind:clientWidth={w}>
  <div class="background">
    <Pancake.Chart x1={$x1 - 2.5} x2={$x2 + 2.5} y1={0} y2={maxExpense}>
      <!-- men -->
      <Pancake.Columns data={$income} width={3}>
        <div class="column income" />
      </Pancake.Columns>

      <!-- women -->
      <Pancake.Columns data={$expenses} width={3}>
        <div class="column expenses" />
      </Pancake.Columns>
    </Pancake.Chart>
  </div>

  <div class="foreground">
    <Pancake.Chart x1={$x1 - 2.5} x2={$x2 + 2.5} y1={0} y2={maxIncome}>
      <Pancake.Grid horizontal count={5} let:value let:first>
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
    height: 300px;
    margin: 0 0 36px 0;
  }

  .background,
  .foreground {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 3em 3em 2em 0;
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
    left: calc(100% + 1em);
    bottom: -0.5em;
    line-height: 1;
  }

  .x.label {
    width: 4em;
    left: -2em;
    bottom: 5px;
    text-align: center;
  }

  .background .x.label {
    color: white;
    font-size: 10px;
  }

  .foreground .x.label {
    bottom: -22px;
  }

  .column {
    position: absolute;
    left: 1px;
    width: 10%;
    left: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    border-right: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    height: 100%;
    opacity: 0.6;
    border-radius: 2px 2px 0 0;
  }

  .column.income {
    background-color: #9ffe99;
    left: 20px;
    width: 10%;
  }

  .column.expenses {
    background-color: #9f1199;
  }

  .medium .slider-container span {
    font-size: 3.5em;
  }

  .large .slider-container span {
    font-size: 5em;
  }
</style>
