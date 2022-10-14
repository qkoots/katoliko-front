<template>
  <div class="mb-24 md:mt-12 md:w-3/4 lg:w-1/2 md:mx-auto">
    <div class="mb-10 md:mb-16">
      <div class="md:flex md:justify-between items-center title-bar px-4 pt-10 pb-6">
        <NavigationBackButton />
        <div class="md:flex md:justify-between items-center">
          <h3 class="mb-2">{{ eventData.title }}</h3>
          <p
            v-if="eventData.date"
            class="date">
            <span>Fecha:</span> 
            {{ `${(eventData.date).split('-')[2]}-${(eventData.date).split('-')[1]}-${(eventData.date).split('-')[0]}` }}
          </p>
        </div>
      </div>
      <p v-html="eventData.text"></p>
      <br>
      <div class="mb-16">
        <img :src="eventData.downloadURL" alt="">
      </div>
    </div>
    <youtube
      v-if="videoId" 
      :video-id="videoId">
    </youtube>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SingleEvent',
  data() {
    return {
      eventData: {},
      videoId: null
    }
  },

  computed: {
    ...mapGetters([
      'getEvents'
    ])
  },

  async mounted() {
    if (Object.keys(this.getEvents).length === 0) {
      try {
        const { data: response } = await this.$axios.get(`${process.env.domain}/api/get-events`)
        this.$store.dispatch('setEvents', response.doc)
        this.eventData = response.doc.filter(event => event._id === this.$route.query.id)[0]
        if (this.eventData.youtubeURL) this.videoId = this.$youtube.getIdFromURL(this.eventData.youtubeURL)
      } catch (error) {
        error.response ? console.log(error.response) : console.log(error);
      }
    } else {
      this.eventData = this.getEvents.filter(event => event._id === this.$route.query.id)[0]
      if (this.eventData.youtubeURL) this.videoId = this.$youtube.getIdFromURL(this.eventData.youtubeURL)
    }
  },

  beforeCreate() {
    if (!this.$route.query.id) {
      this.$router.replace('/events')
    }
  }
}
</script>