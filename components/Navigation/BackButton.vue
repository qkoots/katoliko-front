<template>
  <div
    v-if="$route.path !== '/'"
    @click="goBack"
    class="mt-4 mb-8 md:mt-12 md:w-1/2 md:mx-auto lg:hidden chevron">
    <svg style="width:30px; height:30px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  </div>
</template>

<script>
export default {
  methods : {
    goBack() {
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
.chevron {
  padding: 6px;
  width: fit-content;
  background-color: #FFFFFF;
  color: #2B1C44;
  border-radius: 10px;
}
</style>>

</style>