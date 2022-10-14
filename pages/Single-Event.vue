<template>
  <div :style="image">
    <Event />
  </div>
</template>

<script>
import bgWhiteLayer from '../static/app-bg-2.png'

export default {
  name: "SingleEventPage",
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
    this.image.backgroundImage = `url(${bgWhiteLayer})`
  }
}
</script>