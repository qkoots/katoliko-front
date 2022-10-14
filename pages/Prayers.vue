<template>
  <div :style="image">
    <Categories
      title="Orashon"
      category="prayer" />
  </div>
</template>

<script>
import bgBlurred from '../static/app-bg-blurred.png'

export default {
  name: "PrayersPage",
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
    this.image.backgroundImage = `url(${bgBlurred})`
  }
}
</script>
