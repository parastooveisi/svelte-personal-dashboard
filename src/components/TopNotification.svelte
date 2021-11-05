<script lang="ts">
  import { notifications } from "../stores/notifications";

  export let title: string;
  export let message: string;
  export let type: string;

  const removeNotification = () => {
    notifications.update((n) => {
      let newNotifciations = n.filter((notification) => {
        return `${type}${title}${message}` !== `${notification.type}${notification.title}${notification.message}`;
      });

      return [...newNotifciations];
    });
  };
</script>

<div class="notification {type} flex flex-col p-2">
  <div class="h-5 flex justify-end">
    <button class="text-gray-100 inline h-5 w-5 rounded-full flex items-center justify-center text-2xl" title="Close" on:click={removeNotification}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"
        ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg
      >
    </button>
  </div>
  <h2 class="mb-2 text-xl px-6">{title}</h2>
  <div class="pb-2 pt-1 px-6">{message}</div>
</div>

<style lang="postcss">
  .notification {
    @apply text-gray-100;
    @apply mb-2;
  }
  .warning {
    @apply bg-yellow-400;
  }
  .info {
    @apply bg-blue-400;
  }
  .error {
    @apply bg-red-400;
  }
</style>
