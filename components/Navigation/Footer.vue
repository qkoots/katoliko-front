<template>
  <div class="flex flex-col items-center justify-between">
    <!-- <button>Donashon</button> -->
    <div>
      <span class="text-xs copyright">
        © {{ new Date().getFullYear() }} All rights reserved.
      </span> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterComponent'
  }
</script>

<style scoped>

button {
  background-color: #edd83d;
  padding: .5rem 1rem;
  border-radius: 10px;
  color: #32386A;
  font-weight: 600;
}
.copyright {
  color: #786990;
}
</style>