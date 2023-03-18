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

    <p
      class="mb-4 text-md font-semibold text-red-600 dark:text-red-500 font-medium"
      v-if="error"
    >
      {{ errorMessage }}
    </p>
    <div
      class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800"
    >
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in</h2>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email
          </label>
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
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            v-model="v$.password.$model"
            placeholder="••••••••"
            :class="{
              'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                v$.password.$error,
            }"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
          <p
            class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium"
            v-for="error in v$.password.$errors"
          >
            {{ error.$message }}
          </p>
        </div>
        <div class="flex items-center flex-wrap gap-y-3">
          <button
            type="submit"
            class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Login to your account
          </button>

          <router-link
            :to="{ name: 'forgot-password' }"
            class="ml-auto text-sm text-red-700 hover:underline dark:text-red-500"
            >Forgot Password?
          </router-link>
          <a href="#"></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";
import userApi from "../services/userApi";
const digit = helpers.regex(/^(?=.*\d).{1,}$/);
const uppercase = helpers.regex(/^(?=.*[A-Z]).{1,}$/);
const lowercase = helpers.regex(/^(?=.*[a-z]).{1,}$/);
const special = helpers.regex(
  /^(?=.*[!@#$%^&*()\-_=+[{\]};:\'",.<>\/?\\|]).{1,}$/
);

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "yash@email.app",
      password: "abc",
      error: false,
      errorMessage: "",
    };
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("Email cannot be empty", required),
        email: helpers.withMessage("Please enter valid email", email),
      },
      password: {
        required: helpers.withMessage("Password cannot be empty", required),
        // minLength: helpers.withMessage(
        //   "Password must be between 8 to 32 characters",
        //   minLength(8)
        // ),
        // maxLength: helpers.withMessage(
        //   "Password must be between 8 to 32 characters",
        //   maxLength(32)
        // ),
        // digit: helpers.withMessage(
        //   "Password must contain atleast one digit",
        //   digit
        // ),
        // lowercase: helpers.withMessage(
        //   "Password must contain atleast one lowercase character",
        //   lowercase
        // ),
        // uppercase: helpers.withMessage(
        //   "Password must contain atleast one uppercase character",
        //   uppercase
        // ),
        // special: helpers.withMessage(
        //   "Password must contain atleast one special character",
        //   special
        // ),
      },
    };
  },
  methods: {
    handleSubmit: async function () {
      const result = await this.v$.$validate();

      if (!result) {
        return;
      }
      console.log("submit okay");

      userApi
        .signin(this.email, this.password)
        .then((result) => {
          console.log(result);
          localStorage.setItem("token", result.data.token);
          this.$router.replace({ name: "home" });
        })
        .catch((err) => {
          console.log(err.message);
          this.error = true;
          this.errorMessage = "Invalid Credentials";
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
