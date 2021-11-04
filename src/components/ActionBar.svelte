<script lang="ts">
  let people = [
    { initial: "P", color: "indigo-700" },
    { initial: "J", color: "pink-700" },
    { initial: "M", color: "red-700" },
    { initial: "W", color: "blue-700" },
    { initial: "C", color: "black" },
  ];
</script>

<div>
  <div class="avatars">
    <ul class="grid grid-flow-col auto-cols-min">
      {#each people as person, i}
        <li class="ml-{i * 4}"><span class="bg-{person.color}">{person.initial}</span></li>
      {/each}
      <li class="add-new-person">
        <button class="rounded-full h-6 w-6 flex items-center justify-center bg-green-600 text-gray-100">+</button>
      </li>
    </ul>
  </div>
</div>

<style lang="postcss">
  li {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  li span {
    @apply rounded-full h-10 w-10 flex items-center justify-center text-gray-100;
  }
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
