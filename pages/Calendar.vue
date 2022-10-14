<template>
  <div :style="image">
    <Calendar />
  </div>
</template>

<script>
import bgWhiteLayer from '../static/app-bg-2.png'

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
    this.image.backgroundImage = `url(${bgWhiteLayer})`
  }
}
</script>