<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppSidebar from "./components/AppSidebar.vue";
import userApi from "./services/userApi";
export default {
  data() {
    return {
      openRoutes: ["signin", "forgot-password"],
      loaded: false,
      sidebarItems: [],
      user: {},
    };
  },
  methods: {
    fetchData() {
      if (this.show && !localStorage.token) {
        return this.$router.replace({
          name: "signin",
        });
      }
      userApi
        .config()
        .then((result) => {
          this.user = result.data.user;
          this.sidebarItems = result.data.sidebarItems;
        })
        .catch((err) => {
          // console.log(err);
          return this.$router.replace({
            name: "signin",
          });
        });
    },
  },
  computed: {
    show: function () {
      const show =
        this.openRoutes.findIndex((route) => route == this.$route.name) === -1;

      if (show && this.sidebarItems.length === 0) {
        // console.log("side data fetched");
        this.fetchData();
      }

      return show;
    },
  },
  components: {
    AppNavbar,
    AppSidebar,
  },
};
</script>
<template>
  <AppNavbar v-if="show" :user="user" />

  <AppSidebar v-if="show" :sidebarItems="sidebarItems" />

  <div class="bg-gray-50" :class="{ 'p-4 sm:ml-64': show }">
    <div
      :class="{
        'p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 bg-white':
          show,
      }"
    >
      <router-view />
    </div>
  </div>
</template>
