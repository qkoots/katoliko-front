<template>
  <div class="mb-44 md:mt-12 md:w-3/4 lg:w-1/2 md:mx-auto">
    <div class="mb-10 md:mb-16">
      <div class="md:flex md:justify-between items-center title-bar px-4 pt-10 pb-6">
        <NavigationBackButton />
        <h3 class="mb-2">{{ item.title }}</h3>
      </div>
      <div v-html="item.text"></div>
      <br>
    </div>
    <youtube
      v-if="videoId" 
      :video-id="videoId">
    </youtube>
  </div>
</template>

<script>
  export default {
    name: 'SingleMusic',
    data() {
      return {
        item: {},
        videoId: null
      }
    },

    mounted() {
      if (this.$route.query.category === 'music') {
        if (this.$store.state.music.length === 0) {
          this.$router.replace('/music')
        } else {
          this.item = this.$store.state.music.find(object => object._id === this.$route.query.id)
        }
      }
      
      if (this.$route.query.category === 'prayer') {
        if (this.$store.state.prayers.length === 0) {
          this.$router.replace('/prayers')
        } else {
          this.item = this.$store.state.prayers.find(object => object._id === this.$route.query.id)
        }
      }
      
      if (this.$route.query.category === 'katisashi') {
        if (this.$store.state.katisashi.length === 0) {
          this.$router.replace('/katisashi')
        } else {
          this.item = this.$store.state.katisashi.find(object => object._id === this.$route.query.id)
        }
      }

      if (this.item.youtubeURL) {
        this.videoId = this.$youtube.getIdFromURL(this.item.youtubeURL)
      } 
    }
  }
</script>