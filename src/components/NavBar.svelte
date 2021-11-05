<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items: { title: string; icon: string }[];
  export let activePage: string;

  $: isCollapsed = false;

  const toggleCollapsed = () => {
    isCollapsed = !isCollapsed;
  };
</script>

<div class="{isCollapsed ? 'w-16' : 'w-1/6'} h-screen flex-shrink flex-grow-0 transition-all duration-500 ease-in-out">
  <div class="sticky top-0 p-4 bg-gray-100 h-full">
    <button class="mx-1" on:click={toggleCollapsed}>
      {#if isCollapsed}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
      {/if}
    </button>
    <ul class="flex sm:flex-col overflow-hidden content-center justify-center">
      {#each items as item}
        <li on:click={() => dispatch("tabChange", item.title)} class="py-2 hover:text-indigo-300 rounded {item.title === activePage ? 'text-indigo-600' : ''}">
          <a class="truncate" href="#">
            <span class="w-7 sm:mx-2 mx-4 inline">{item.icon}</span>
            <span class="hidden sm:inline">{item.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
