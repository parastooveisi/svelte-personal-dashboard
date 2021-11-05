<script>
  import AddUserModal from "./AddUserModal.svelte";
  import { barChartData } from "../stores/barChartData";
  import { charts } from "../stores/charts";

  let showModal = false;
  let people = [
    { initial: "P", color: "indigo-700" },
    { initial: "J", color: "pink-700" },
    { initial: "M", color: "red-700" },
    { initial: "W", color: "blue-700" },
    { initial: "C", color: "black" },
  ];
  let sortDirection = "up";

  const toggleSortDirection = () => {
    sortDirection = sortDirection === "up" ? "down" : "up";

    charts.update((_n) => {
      if (sortDirection === "down") {
        return [{ name: "Line" }, { name: "Doughnut" }, { name: "Bar" }];
      } else {
        return [{ name: "Doughnut" }, { name: "Bar" }, { name: "Line" }];
      }
    });
  };

  const handleToggleModal = () => {
    showModal = !showModal;
  };

  const addBarChartEntry = () => {
    barChartData.update((n) => [
      {
        year: n[0].year + 1,
        income: n[0].income + 200,
        expenses: n[0].expenses + 100,
      },
      ...n,
    ]);
  };
</script>

<div class="flex justify-between">
  <div class="avatars">
    <ul class="grid grid-flow-col auto-cols-min">
      {#each people as person, i}
        <li class="ml-{i * 8}"><span class="bg-{person.color} rounded-full h-10 w-10 flex items-center justify-center text-gray-100">{person.initial}</span></li>
      {/each}
      <li class="add-new-person">
        <button class="rounded-full h-6 w-6 flex items-center justify-center bg-green-600 text-gray-100" on:click={handleToggleModal}>+</button>
      </li>
    </ul>
  </div>
  <div class="flex items-center">
    <button class="bg-gray-700 py-2 px-4 rounded-md mr-4" on:click={toggleSortDirection}>
      {#if sortDirection === "up"}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      {/if}
    </button>
    <input type="date" />
    <button class="bg-indigo-700 text-gray-200 py-2 px-4 rounded-md" on:click={addBarChartEntry}>Add +</button>
  </div>
</div>

<AddUserModal title="Add a new user" open={showModal} on:close={() => handleToggleModal()}>
  <div slot="body">
    <form class="flex flex-col">
      <label for="first_name">First Name</label>
      <input
        id="first_name"
        type="text"
        name="first_name"
        class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 mb-3 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
        autofocus
      />
      <label for="last_name">Last Name</label>
      <input
        id="last_name"
        type="text"
        name="last_name"
        class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 mb-3 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
      />
      <button type="submit" class="bg-green-500 rounded-md p-4">Save</button>
    </form>
  </div>
</AddUserModal>

<style lang="postcss">
  li {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  /* li span {
    @apply rounded-full h-10 w-10 flex items-center justify-center text-gray-100;
  } */
  .add-new-person {
    @apply flex items-center;
    grid-column: auto;
    position: relative;
    left: -1rem;
  }

  ul:hover li {
    @apply mr-1;
    @apply ml-0;
    grid-column: auto;
    left: 0;
  }
</style>
