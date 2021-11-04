<script lang="ts">
  import BarChart from "./BarChart.svelte";
  import DonutChart from "./charts/donutChart.svelte";
  import LineChart from "./charts/LineChart.svelte";
</script>

<div class="grid grid-cols-2">
  <div><DonutChart /></div>
  <div>
    <BarChart />
  </div>
  <div class="col-span-2"><LineChart /></div>
  <div />
</div>
