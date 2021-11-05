<script>
  let menuState = "closed";

  const toggleMenuState = () => {
    menuState = menuState === "closed" ? "open" : "closed";
  };
</script>

<nav class="my-3">
  <ul class="flex justify-end items-center">
    <li class="ml-2">
      <button title="Search" class="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200">🔎</button>
    </li>
    <li class="ml-2">
      <button title="Chat" class="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200">💬</button>
    </li>
    <li class="ml-2">
      <button title="Help" class="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200">?</button>
    </li>
    <li class="ml-8">
      <div class="relative inline-block">
        <button class="flex items-center" on:click={toggleMenuState}>
          <span class="rounded-full h-10 w-10 flex items-center justify-center bg-indigo-700 text-gray-100">N</span>
          <span class="ml-2">Name</span>
          <span class="ml-2"
            ><svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>

        <div class="dropdown {menuState === 'open' ? '' : 'hidden'} focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Profile</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Settings</a>
          </div>
          <div class="py-1" role="none">
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Log out</a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</nav>

<style lang="postcss">
  .dropdown {
    @apply origin-top-right absolute right-0 mt-2 w-56 rounded-md;
    @apply shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100;
  }
</style>
