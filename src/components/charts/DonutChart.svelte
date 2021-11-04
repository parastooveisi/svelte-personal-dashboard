<script>
  import chartjs from "chart.js";
  let chartData;
  import { onMount } from "svelte";

  var data = {
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

  onMount(async (promise) => {
    ctx = chartCanvas.getContext("2d");
    var chart = new chartjs(ctx, {
      type: "polarArea",
      data: data,
    });
  });
</script>

<div id="chart">
  <canvas bind:this={chartCanvas} id="myChart" />
</div>

<style>
  #chart {
    height: 400px;
    width: 400px;
  }
</style>
