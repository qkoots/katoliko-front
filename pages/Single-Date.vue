<template>
  <div :style="image">
    <SingleDate />
  </div>
</template>

<script>
  import bgSemiDark from '../static/app-bg-3.png'

export default {
  name: 'SingleDateScreen',
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
    this.image.backgroundImage = `url(${bgSemiDark})`
  }
}
</script>