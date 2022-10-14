<template>
  <div class="mb-40 md:mt-12 md:w-1/2 md:mx-auto">
    <div class="mb-10 md:mb-16">
      <div class="md:flex md:justify-between items-center title-bar px-4 pt-10 pb-6">
        <NavigationBackButton />
        <h3 class="lg:text-center">EVENTS</h3>
      </div>
      <ul class="flex flex-col xl:w-8/12">
        <li 
          v-for="(event, index) in list"
          :key="index"
          class="py-2 mb-2">
          <NuxtLink
            :to="{ path: `/single-event`, query: { id: event._id } }"
            class="flex justify-between items-center">
            <div>
              <h5 class=""> {{ event.title }} </h5>
              <p class="date">
                <span>Fecha:</span> 
                {{ `${event.date.split('-')[2]}-${event.date.split('-')[1]}-${event.date.split('-')[0]}` }}
              </p>
            </div>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#A0B094" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "EventsList",
  data() {
    return {
      list: []
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
        if (response.doc) this.$store.dispatch('setEvents', response.doc)
        this.list = response.doc
      } catch (error) {
        error.response ? console.log(error.response) : console.log(error);
      }
    } else {
      this.list = this.getEvents
    }
  }
}
</script>

<style scoped>
  ul li {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    padding: 1em;
    background-color: #fff;
    border-radius: 5px;
  }
</style>