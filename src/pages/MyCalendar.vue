<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Calendar App</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>

    <section class="flex">
      <p
        v-for="day in days"
        :key="day"
        class="text-center font-mono"
        style="width: 14.28%"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap my-2">
      <p
        v-for="num in firstDayOfMonth()"
        :key="num"
        class="text-center font-mono border"
        style="width: 14.28%"
      ></p>
      <p
        v-for="day in daysInMonth(currentYear, currentMonth)"
        :key="day"
        class="text-center font-mono border"
        style="width: 14.28%"
      >
        {{ day }}
      </p>
      <p
        v-for="num in 42 -
        daysInMonth(currentYear, currentMonth) -
        firstDayOfMonth()"
        :key="num"
        class="text-center py-1 font-mono"
        style="width: 14.28%"
      ></p>
    </section>
    <section class="flex justify-between my-4">
      <button class="p-2 rounded border-2" @click="previousMonth">Prev</button>
      <button class="p-2 rounded border-2" @click="nextMonth">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    firstDayOfMonth() {
      return new Date(this.currentYear, this.currentMonthIndex, 1).getDay();
    },
    previousMonth() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if (this.currentMonth === 12) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth - 1).toLocaleString(
        "default",
        { month: "long" }
      );
    },
    currentMonthIndex() {
      return this.currentMonth - 1;
    },
  },
};
</script>

<style>
</style>