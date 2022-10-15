<template>
  <div class="md:mt-12 md:w-1/2 md:mx-auto">
    <div class="mb-10 md:mb-16">
      <div class="title-bar px-4 pt-10 pb-6 lg:text-center">
        <NavigationBackButton />
        <h5
          v-if="data === false"
          class="font-semibold">No data available for this date.
        </h5>
        <div v-else>
          <div class="lg:mt-18 mb-10">
            <h2
              v-if="weekDay"
              class="mb-2">{{ (weekDay).slice(0, 1).toUpperCase() + (weekDay).slice(1) }}
            </h2>
            <p
              v-if="date"
              class="date">
              {{ formatDate }}
            </p>
          </div>
            <p 
              v-if="messageOfTheDay"
              v-html="messageOfTheDay"
              class="md:flex md:flex-col mb-10">
            </p>
        
        </div>
      </div>

      <ul 
        v-if="liturgiaDayLink"
        class="lg:w-8/12 xl:w-5/12 mx-auto flex flex-col">
        <NuxtLink
          v-if="liturgiaDayLink"
          :to="{ path: '/liturgia', query: { type: 'day', id } }"
          class="link day mb-5 text-center text-white font-bold">
            Lauden orashon di mainta
        </NuxtLink>

        <NuxtLink
          v-if="liturgiaNightLink"
          :to="{ path: '/liturgia', query: { type: 'night', id } }"
          class="link night mb-2 text-center font-bold">
          Vespers orashon di anochi
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SingleDate',
    data() {
      return {
        data: false,
        weekDay: '',
        date: '',
        id: null,
        prayersLink: false,
        liturgiaDayLink: false,
        liturgiaNightLink: false,
        messageOfTheDay: '',
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

    async mounted(){
      try {
        const selectedDate = this.$route.query.date
        const { data: response } = await this.$axios.post(`${process.env.domain}/api/get-single-post-data`, { date: selectedDate }) // get date from query in URL
        if (response.doc) {
          this.data = true
          this.$store.dispatch('setSingleDateData', response.doc)
          this.date = response.doc.date
          this.id = response.doc._id
          this.weekDay = response.doc.weekDay
          this.messageOfTheDay = response.doc.msgOfTheDay
        } else {
          this.data = false
        }
      } catch (error) {
        error.response ? console.log(error.response) : console.log(error)
      }

      this.prayersLink = (this.getSingleDateData.prayerTitle && this.getSingleDateData.prayerText)
      this.liturgiaDayLink = (this.getSingleDateData.liturgiaDayTitle && this.getSingleDateData.liturgiaDayText)
      this.liturgiaNightLink = (this.getSingleDateData.liturgiaNightTitle && this.getSingleDateData.liturgiaNightText)
    }
  }
</script>