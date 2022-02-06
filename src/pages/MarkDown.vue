/* elsint-disable */
<template>
  <div class="flex flex-wrap w-full my-3">
    <h1 class="w-full text-center text-3xl font-bold">Markdown App</h1>
    <section class="flex w-10/12 m-auto h-screen mb-10">
      <article class="w-1/2 border ml-2">
        <textarea
          :value="text"
          @input="update"
          class="w-full h-full"
        ></textarea>
      </article>
      <article
        class="w-1/2 border ml-2 bg-gray-100"
        v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
import { parse } from "marked";
import debounce from "../utilities/mixins/debounce";

export default {
  data() {
    return {
      text: "",
    };
  },
  mixins: [debounce],
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  computed: {
    markedText() {
      return parse(this.text);
    },
  },
};
</script>

<style>
</style>