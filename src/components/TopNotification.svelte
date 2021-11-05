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
    <button class="text-gray-100 inline h-5 w-5 rounded-full flex items-center justify-center text-2xl" title="Close" on:click={removeNotification}>ⓧ</button>
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
