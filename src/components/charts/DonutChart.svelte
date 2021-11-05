<script lang="ts">
  import Chart from "chart.js";
  import { onMount } from "svelte";

  export let row: string;

  const chartData = {
    datasets: [
      {
        data: [11, 16, 7, 14],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
        label: "My dataset", // for legend
      },
    ],
    labels: ["Europe", "Canada", "Others", "US"],
  };
  let ctx;
  let chartCanvas;

  onMount(() => {
    ctx = chartCanvas.getContext("2d");
    new (Chart as any)(ctx, {
      type: "polarArea",
      data: chartData,
    });
  });
</script>

<div class="chart-wrapper {row} h-full shadow-lg">
  <h1 class="text-2xl text-center">Population Growth</h1>
  <div id="chart">
    <canvas bind:this={chartCanvas} id="myChart" />
  </div>
</div>

<style lang="postcss">
  #chart {
    @apply mx-auto;
    @apply pb-2;
    width: 100%;
    height: 100%;
  }
</style>
