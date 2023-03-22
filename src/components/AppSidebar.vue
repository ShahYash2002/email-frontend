<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <p
            class="text-center p-2 text-base font-semibold block md:hidden text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span class="ml-3 text-3xl capitalize">MailBox</span>
          </p>
        </li>
        <li v-for="item in sidebarItems">
          <router-link
            :to="item.target"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span v-html="item.icon"></span>
            <span class="ml-3 capitalize">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["sidebarItems"],
};
</script>

<style scoped>
.router-link-exact-active {
  font-weight: 800;
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
</style>
