<template>
  <div :style="image">
    <div class="pt-32 pb-10">
      <div class="text-center mb-4">
      </div>
      <h1 class="text-white text-center mb-4">Bonbiní na katóliko</h1>
      <p class="text-white text-center intro">Un plataforma digital di Diósesis di Willemstad pa promové orashonan di tur dia.</p>

      <div class="mt-20 w-full text-center">
        <NuxtLink
          to="/calendar"
          class="link day mb-5 text-center text-white font-bold">
          Kalènder
        </NuxtLink>
      </div>

      <div class="text-center mt-52">     
        <svg class="inline-block" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2L8 8L2 2" stroke="#FCDDEC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <!-- <About /> -->
  </div>
</template>

<script>
import bgDark from '../static/app-bg.png'

export default {
  name: 'IndexPage',
  data() {
    return {
      image: { 
        backgroundImage: '',
        'background-repeat': 'none',
        'background-size': 'cover'
      },
    }
  },

  created() {
    this.image.backgroundImage = `url(${bgDark})`
  }
}
</script>

<style scoped>
  p {
    font-size: 18px !important  ;
  }
</style>