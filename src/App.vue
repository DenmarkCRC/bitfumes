<template>
  <AppHeader @openLoginModal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @closeLoginModal="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";

export default {
  name: "app",
  data() {
    return {
      isLoginOpen: false,
    };
  },
  components: {
    AppHeader,
    LoginModal,
  },
};
</script>

<style>
</style>
