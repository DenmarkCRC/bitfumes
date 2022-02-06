<template>
  <nav
    class="
      w-full
      bg-gradient-to-r
      from-blue-800
      to-blue-600
      text-white
      px-4
      py-5
    "
  >
    <router-link
      v-for="page in pageList"
      :key="page.to"
      class="mx-2"
      :to="page.to"
      >{{ page.title }}</router-link
    >
    <button class="mx-2" @click="$emit('openLoginModal')">Login</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pageList: [
        { title: "Home", to: "/" },
        { title: "DC Heroes", to: "/dcheroes" },
        { title: "Calendar", to: "calendar" },
        { title: "Markdown", to: "markdown" },
        { title: "Slider", to: "slider" },
      ],
    };
  },
};
</script>

<style>
</style>