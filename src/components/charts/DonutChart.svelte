<script>
  import Chart from "chart.js";
  import { onMount } from "svelte";

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

  onMount(async (_promise) => {
    ctx = chartCanvas.getContext("2d");
    new Chart(ctx, {
      type: "polarArea",
      data: chartData,
    });
  });
</script>

<div id="chart" class="shadow-lg pb-4">
  <canvas bind:this={chartCanvas} id="myChart" />
</div>

<style>
  #chart {
    width: 100%;
  }
</style>
