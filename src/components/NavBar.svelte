<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items: { title: string; icon: string }[];
  export let activePage: string;
</script>

<div class="w-full h-screen flex-shrink flex-grow-0">
  <div class="sticky top-0 p-4 bg-gray-100 h-full">
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
