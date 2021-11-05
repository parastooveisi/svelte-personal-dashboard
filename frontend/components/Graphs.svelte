<script>
  import { charts } from "../stores/charts";
  import { onDestroy } from "svelte";
  import { writable } from "svelte/store";

  import BarChart from "./BarChart.svelte";
  import DonutChart from "./charts/DonutChart.svelte";
  import LineChart from "./charts/LineChart.svelte";

  const chartOrder = writable();
  $: $chartOrder;

  const unsubscribe = charts.subscribe((n) => {
    $chartOrder = n;
  });

  onDestroy(unsubscribe);
</script>

<div class="grid grid-cols-2 mt-6 gap-3">
  <div class="col-span-2 md:col-span-1">
    {#if $chartOrder[0].name === "Bar"}
      <BarChart row="one" />
    {:else if $chartOrder[0].name === "Doughnut"}
      <DonutChart row="one" />
    {:else}
      <LineChart row="one" />
    {/if}
  </div>
  <div class="col-span-2 md:col-span-1">
    {#if $chartOrder[1].name === "Bar"}
      <BarChart row="one" />
    {:else if $chartOrder[1].name === "Doughnut"}
      <DonutChart row="one" />
    {:else}
      <LineChart row="one" />
    {/if}
  </div>
  <div class="col-span-2">
    {#if $chartOrder[2].name === "Bar"}
      <BarChart row="two" />
    {:else if $chartOrder[2].name === "Doughnut"}
      <DonutChart row="two" />
    {:else}
      <LineChart row="two" />
    {/if}
  </div>
</div>
