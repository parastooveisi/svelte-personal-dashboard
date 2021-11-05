<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items;
  export let activeItem: string;
</script>

<div class="max-w-md w-full h-screen flex-shrink flex-grow-0 px-4 ">
  <div class="sticky top-0 p-4 bg-gray-100 rounded-xl w-full h-full">
    <ul class="flex sm:flex-col overflow-hidden content-center justify-center">
      {#each items as item}
        <li on:click={() => dispatch("tabChange", item)} class="py-2 hover:bg-indigo-300 rounded {item === activeItem ? 'bg-indigo-300' : ''}">
          <a class="truncate" href="#">
            <img alt="home icon" src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
            <span class="hidden sm:inline">{item}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
