<script lang="ts">
  import TailwindCSS from "./TailwindCSS.svelte";
  import NavBar from "./components/NavBar.svelte";
  import TopNav from "./components/TopNav.svelte";
  import TopNotification from "./components/TopNotification.svelte";
  import Graphs from "./components/Graphs.svelte";
  import ActionBar from "./components/ActionBar.svelte";
  import { notifications, Notification } from "./stores/notifications";
  import { writable } from "svelte/store";
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
  const topNotifications = writable<Notification[]>();
  $: $topNotifications;

  notifications.subscribe((n) => {
    $topNotifications = n;
  });
</script>

<TailwindCSS />

<div class="flex">
  <NavBar on:tabChange={tabChange} {activePage} {items} />

  <main role="main" class="w-full h-full px-8">
    <TopNav />
    {#if activePage === "Home"}
      {#each $topNotifications as notification}
        <TopNotification {...notification} />
      {/each}
      <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id="home">Home</h1>
    {:else if activePage === "Dashboard"}
      <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id={activePage}>Personal Dashboard</h1>
      <ActionBar />
      <Graphs />
    {/if}
  </main>
</div>
