<template>
  <div
    class="pt-14 min-h-screen">
    <div>
      <h2 class="mb-10 text-center">Kontakto</h2>
      <ul class=" text-center">
        <li>
          <p>Diósesis di Willemstad</p>
        </li>
        <li>
          <p>Julianaplein 5</p>
        </li>
        <li>
          <p>
            <a href="https://api.whatsapp.com/send?phone=15551234567">+59994625876</a>
          </p>  
        </li>
        <li>
          <p class="underline">
            <a href="mailto:info@obispado.com">info@katoliko.app</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bgDark from '../static/app-bg.png'

export default {
  name: 'ContactPage',
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
  font-size: 17px !important;
  font-weight: 400 !important;
}

li {
  margin-bottom: 24px;
}

</style>