<template>
  <div class="md:w-3/4 lg:w-1/2 md:mx-auto wrapper pt-14 pb-9">
    <div class="mb-6 items-center px-4">
      <h3 class="mb-2 text-center">Katoliko App</h3>
      <div v-if="text">
        <p class="text-center" v-html="text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return {
      text: ''
    }
  },

  async mounted() {
    try {
      const { data: response } = await this.$axios.get(`${process.env.domain}/api/get-general-settings`)
      if (response.doc.about) {
        this.text = response.doc.about 
      };
    } catch (error) {
      error.response ? console.log(error.response) : console.log(error);
    }
   
  }
}

</script>

<style scoped>
.wrapper {
  /* width: 100%; */
  /* background-color: #EDF7FF; */
  /* margin-left: -1rem;
  margin-right: -1rem; */

}
</style>