<template>
  <section
    class="z-20 h-screen w-screen bg-gray-400 fixed top-0 opacity-50"
    @click="$emit('closeLoginModal')"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow-lg">
        <h1>Login</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>