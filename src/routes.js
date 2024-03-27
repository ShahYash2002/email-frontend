import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import Home from "./views/Home.vue";
import Client from "./views/Client.vue";
import AddClient from "./views/AddClient.vue";
import Messages from "./views/Messages.vue";
import MessageDetails from "./views/MessageDetails.vue";
import Settings from "./views/Settings.vue";
export default [
  {
    path: "/",
    component: SignIn,
    name: "signin",
  },
  {
    path: "/signup",
    component: SignUp,
    name: "signup",
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
    path: "/client/add/:type",
    component: AddClient,
    name: "add-client",
    props: true,
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
    path: "/client/:id(\\d+)/message/:msg_id",
    component: MessageDetails,
    name: "message-details",
    props: true,
  },
  {
    path: "/settings",
    component: Settings,
    name: "settings",
    props: true,
  },
];
