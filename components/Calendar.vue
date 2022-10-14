<template>
  <div class="mb-24 lg:mt-12 md:w-8/12 md:mx-auto lg:w-7/12 xl:w-5/12 lg:p-0">
    <div class="mt-14 mb-8 md:mb-6">
      <h1 class="mb-4 lg:text-center">Skohe un fecha</h1>
    </div>

    <el-calendar
      ref="calendar"
      :first-day-of-week="1">
      <template
        slot="dateCell"
        slot-scope="{ data }">
        <p
          :class="data.isSelected ? 'is-selected' : ''"
          @click="getDate(data.day)">
          {{ data.day.split('-')[2] }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>

export default {
  name: 'CalendarPage',

  methods: {
    getDate(selectedDate) {
      this.$router.push({ path: '/single-date', query: { date: selectedDate } })
    }
  }
}
</script>

<style scoped>

</style>