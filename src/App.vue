<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppSidebar from "./components/AppSidebar.vue";
import sidebarItems from "./assets/sidebarItems.json";
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
      userApi
        .config()
        .then((result) => {
          this.user = result.data.user;
          this.sidebarItems = result.data.sidebarItems;
        })
        .catch((err) => {
          console.log(err);
          this.$router.replace({
            name: "signin",
          });
        });
    },
  },
  beforeMount() {
    if (this.show) {
      this.fetchData();
    }
  },
  computed: {
    show: function () {
      return (
        this.openRoutes.findIndex((route) => route == this.$route.name) === -1
      );
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
