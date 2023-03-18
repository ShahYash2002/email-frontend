import SignIn from "./views/SignIn.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import Home from "./views/Home.vue";
import Client from "./views/Client.vue";
import Messages from "./views/Messages.vue";
import Settings from "./views/Settings.vue";
export default [
  {
    path: "/",
    component: SignIn,
    name: "signin",
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    name: "forgot-password",
  },
  {
    path: "/home",
    component: Home,
    name: "home",
  },
  {
    path: "/client/:type",
    component: Client,
    name: "client",
    props: true,
  },
  {
    path: "/client/:id(\\d+)/messages",
    component: Messages,
    name: "client-messages",
    props: true,
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings",
    props: true,
  },
];
