<script lang="ts">
  import BarChart from "./BarChart.svelte";
  import DonutChart from "./charts/donutChart.svelte";
  import LineChart from "./charts/LineChart.svelte";
</script>

<div class="grid grid-cols-2 mt-6 gap-3">
  <div class="col-span-2 xl:col-span-1">
    <DonutChart />
  </div>
  <div class="col-span-2 xl:col-span-1">
    <BarChart />
  </div>
  <div class="col-span-2 shadow-lg p-4"><LineChart /></div>
</div>
