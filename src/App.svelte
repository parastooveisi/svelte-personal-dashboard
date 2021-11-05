<script lang="ts">
  import TailwindCSS from "./TailwindCSS.svelte";
  import NavBar from "./components/NavBar.svelte";
  import TopNav from "./components/TopNav.svelte";
  import TopNotification from "./components/TopNotification.svelte";
  import Graphs from "./components/Graphs.svelte";
  let items = [
    {
      title: "Home",
      icon: "🏡",
    },
    {
      title: "Dashboard",
      icon: "📊",
    },
  ];
  let activePage = "Home";
  const tabChange = (e) => {
    activePage = e.detail;
  };
  import ActionBar from "./components/ActionBar.svelte";
</script>

<TailwindCSS />

<div class="grid grid-cols-4">
  <NavBar on:tabChange={tabChange} {activePage} {items} />

  <main role="main" class="w-5/6 h-full col-span-3 mx-auto">
    <TopNav />
    {#if activePage === "Home"}
      <TopNotification />
      <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id="home">Home</h1>
    {:else if activePage === "Dashboard"}
      <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id={activePage}>Personal Dashboard</h1>
      <ActionBar />
      <Graphs />
    {/if}
  </main>
</div>
