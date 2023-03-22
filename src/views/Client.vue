<template>
  <main>
    <div
      class="p-4 bg-white block sm:flex items-center justify-between border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="w-full mb-1">
        <div class="mb-4">
          <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white capitalize"
          >
            All {{ type }}
          </h1>
        </div>
        <div class="sm:flex">
          <div
            class="items-center mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700"
          >
            <form class="lg:pr-3" action="#" method="GET">
              <label for="users-search" class="sr-only">Search</label>
              <div class="relative mt-1 lg:w-64 xl:w-96">
                <input
                  type="text"
                  v-model="searchText"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  :placeholder="`Search for ${type}`"
                />
              </div>
            </form>
          </div>
          <!-- <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
            <button
              type="button"
              data-modal-toggle="add-user-modal"
              class="inline-flex items-center justify-center capitalize w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                class="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add {{ type }}
            </button>
          </div> -->
        </div>
      </div>
    </div>

    <div role="status" v-if="loading">
      <svg
        aria-hidden="true"
        class="w-8 h-8 mr-2 mb-4 ml-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    <template v-else>
      <div class="text-sm mb-4 ml-4 -mt-2">
        <span class="font-semibold">{{ filteredClients.length }}</span>
        {{ type }} found
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow">
              <table
                class="min-w-full divide-y divide-gray-200 border table-fixed dark:divide-gray-600"
              >
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Sr.
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    ></th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                >
                  <tr
                    class="hover:bg-gray-100 dark:hover:bg-gray-700"
                    v-for="(client, index) in filteredClients"
                    :key="client.id"
                  >
                    <td class="px-2 py-4 md:p-4 text-center w-10">
                      {{ index + 1 }}
                    </td>
                    <td
                      class="px-2 py-4 md:p-4 md:mr-12 space-x-6 whitespace-nowrap cursor-default"
                    >
                      <div class="flex items-center gap-2 flex-wrap  ">
                        <img
                          class="rounded-lg sm:mb-0 2xl:mb-0  w-10 h-10 "
                          :src="`https://i.pravatar.cc/500/img=${
                            index + Math.ceil(Math.random() * 100)
                          }`"
                          alt="Jese picture"
                        />
                        <div class="flex flex-col">
                          <div>{{ client.email }}</div>
                          <div>{{ type }}</div>
                        </div>
                      </div>
                    </td>
                    <td
                      class="flex justify-end flex-wrap gap-y-2 px-1 py-4 md:p-4 md:space-x-2 whitespace-nowrap"
                    >
                      <router-link
                        :to="{
                          name: 'client-messages',
                          params: { id: client.id },
                        }"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>

                        View <span class="hidden md:inline-block">Messages</span>
                      </router-link>
                      <!-- <button
                        type="button"
                        data-modal-toggle="edit-user-modal"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <svg
                          class="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Edit user
                      </button>
                      <button
                        type="button"
                        data-modal-toggle="delete-user-modal"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                      >
                        <svg
                          class="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        Delete user
                      </button> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>
  </main>
</template>

<script>
import clientApi from "../services/clientApi";
export default {
  props: ["type"],
  data() {
    return {
      clients: [],
      loading: false,
      searchText: "",
    };
  },
  methods: {
    fetchData: function () {
      this.loading = true;
      clientApi
        .getClientsByType(this.type)
        .then((result) => {
          this.clients = result.data;
          this.loading = false;
        })
        .catch((err) => {
          // console.log(err.message);
          this.loading = false;
        });
    },
  },
  beforeMount() {
    this.fetchData();
  },
  computed: {
    filteredClients: function () {
      return this.clients.filter((client) => {
        // // console.log();
        return client.email.match(this.searchText);
      });
    },
  },
  watch: {
    type: {
      immediate: true,
      handler() {
        this.fetchData();
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
