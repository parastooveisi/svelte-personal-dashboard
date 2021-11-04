<script lang="ts">
  import BarChart from "./BarChart.svelte";
  import LineChart from "./charts/LineChart.svelte";
</script>

<div class="grid grid-cols-2 mt-6">
  <div>Firts Graph here</div>
  <BarChart />
  <div class="col-span-2"><LineChart /></div>
  <div />
</div>
