<template>
  <div
    class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
  >
    <div class="flex items-center justify-center gap-3 mb-8 lg:mb-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
        />
      </svg>
      <span class="text-2xl font-semibold dark:text-white text-3xl"
        >MailBox</span
      >
    </div>
    <!-- Card -->
    <div
      class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800"
    >
      <div class="w-full p-6 sm:p-8">
        <h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          Forgot your password?
        </h2>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Don't fret! Just type in your email and we will send you a code to
          reset your password!
        </p>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label
            >
            <input
              v-model.trim="v$.email.$model"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              :class="{
                'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                  v$.email.$error,
              }"
              placeholder="name@company.com"
            />
            <p
              class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium"
              v-for="error in v$.email.$errors"
            >
              {{ error.$message }}
            </p>
          </div>
          <div class="flex items-center justify-between flex-wrap gap-y-3">
            <button
              type="submit"
              class="flex gap-2 items-center w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset password
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>

            <router-link
              :to="{ name: 'signin' }"
              class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
              >Back to login</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Email cannot be empty", required),
        email: helpers.withMessage("Please enter valid email", email),
      },
    };
  },
  methods: {
    handleSubmit: async function () {
      const result = await this.v$.$validate();
      if (!result) {
        // notify user form is invalid
        return;
      }
      console.log("submit okay");
    },
  },
};
</script>

<style lang="scss" scoped></style>
