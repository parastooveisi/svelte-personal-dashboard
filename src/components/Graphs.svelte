<script lang="ts">
  import { Chart, charts } from "../stores/charts";
  import { onDestroy } from "svelte";
  import { writable } from "svelte/store";

  import BarChart from "./BarChart.svelte";
  import DonutChart from "./charts/donutChart.svelte";
  import LineChart from "./charts/LineChart.svelte";

  const chartOrder = writable<Chart[]>();
  $: $chartOrder;

  const unsubscribe = charts.subscribe((n) => {
    $chartOrder = n;
  });

  onDestroy(unsubscribe);
</script>

<div class="grid grid-cols-2 mt-6 gap-3">
  <div class="col-span-2 xl:col-span-1">
    {#if $chartOrder[0].name === "Bar"}
      <BarChart />
    {:else if $chartOrder[0].name === "Doughnut"}
      <DonutChart />
    {:else}
      <LineChart />
    {/if}
  </div>
  <div class="col-span-2 xl:col-span-1">
    {#if $chartOrder[1].name === "Bar"}
      <BarChart />
    {:else if $chartOrder[1].name === "Doughnut"}
      <DonutChart />
    {:else}
      <LineChart />
    {/if}
  </div>
  <div class="col-span-2 shadow-lg p-4">
    {#if $chartOrder[2].name === "Bar"}
      <BarChart />
    {:else if $chartOrder[2].name === "Doughnut"}
      <DonutChart />
    {:else}
      <LineChart />
    {/if}
  </div>
</div>
