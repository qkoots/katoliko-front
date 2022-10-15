<template>
  <div class="mb-24 md:mt-12 md:w-3/4 lg:w-1/2 md:mx-auto">
    <div class="mb-10 md:mb-16">
      <div class="title-bar px-4 pt-10 pb-6">
        <NavigationBackButton />
        <h3 class="mb-2">{{ title }}</h3>
        <p class="date">{{ formatDate }}</p>
      </div>
      <p v-html="text"></p>
    </div>
    <div
      v-if="videos.length > 0">
      <youtube
        v-for="(id, index) in videos"
        :key="index"
        :video-id="id"
        class="mb-4">
      </youtube>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'LiturgiaPage',
    data() {
      return {
        date: '',
        title: '',
        text: '',
        videoId: null,
        videos: []
      }
    },

    computed: {
      ...mapGetters([
        'getSingleDateData'
      ]),
      
      formatDate() {
        const date = this.date.split('-')
        return `${date[2]}-${date[1]}-${date[0]}`
      }
    },

   async mounted() {
      if (Object.keys(this.getSingleDateData).length === 0) {
        try {
          const { data: response } = await this.$axios.post(`${process.env.domain}/api/get-single-post-data`, { id: this.$route.query.id })
          if (response.doc) this.$store.dispatch('setSingleDateData', response.doc) 
        } catch (error) {
          error.response ? console.log(error.response) : console.log(error);
        }
      }

      this.date = this.getSingleDateData.date;

      if (this.$route.query.type === 'day') {
        this.title = this.getSingleDateData.liturgiaDayTitle
        this.text = this.getSingleDateData.liturgiaDayText

        if (this.getSingleDateData.youtubeLiturgiaDayUrls.length > 0) {
          this.videos = this.getSingleDateData.youtubeLiturgiaDayUrls.map(url => this.$youtube.getIdFromURL(url))
        }
      }

      if (this.$route.query.type === 'night') {
        this.title = this.getSingleDateData.liturgiaNightTitle
        this.text = this.getSingleDateData.liturgiaNightText
        this.text = this.getSingleDateData.liturgiaNightText
        
        if (this.getSingleDateData.youtubeLiturgiaNightUrls.length > 0) {
          this.videos = this.getSingleDateData.youtubeLiturgiaNightUrls.map(url => this.$youtube.getIdFromURL(url))
        }
      }
    },

    beforeCreate() {
      if (!this.$route.query.id || !this.$route.query.type) {
        this.$router.replace('/')
      }
    }
  }
</script>