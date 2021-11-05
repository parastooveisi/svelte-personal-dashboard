<script lang="ts">
  import TailwindCSS from "./TailwindCSS.svelte";
  import NavBar from "./components/NavBar.svelte";
  import TopNav from "./components/TopNav.svelte";
  import TopNotification from "./components/TopNotification.svelte";
  import Graphs from "./components/Graphs.svelte";
  let items = ["Home", "Graphs"];
  let activeItem = "Home";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
  import ActionBar from "./components/ActionBar.svelte";
</script>

<TailwindCSS />

<div class="grid grid-cols-4">
  <NavBar on:tabChange={tabChange} {activeItem} {items} />

  <main role="main" class="w-5/6 h-full col-span-3 mx-auto">
    <TopNav />
    <TopNotification />
    {#if activeItem === "Home"}
      <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id="home">Personal Dashboard</h1>
    {:else if activeItem === "Graphs"}
      <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id="graphs">New Tab</h1>
    {/if}
    <ActionBar />
    <Graphs />
  </main>
</div>
