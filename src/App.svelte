<script lang="ts">
  import TailwindCSS from "./TailwindCSS.svelte";
  import NavBar from "./components/NavBar.svelte";
</script>

<TailwindCSS />

<div
  class="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow"
>
  <NavBar />
  <main role="main" class="w-full flex-grow pt-1 px-3">
    <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id="home">
      Personal Dashboard
    </h1>
  </main>
</div>
