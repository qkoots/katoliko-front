<template>
  <div class="mb-44 md:mt-12 md:w-1/2 md:mx-auto">
    <NavigationBackButton />
    <div class="mb-10 md:mb-16">
      <div class="flex justify-between mb-12 align-middle">
        <h3 class="mb-0 lg:text-center">{{ title }}</h3>
        <el-select
          @change="changeFilter"
          v-model="filterCategory"
          @clear="resetFilter"
          clearable
          placeholder="Filter"
          class="selectbox">
          <el-option
            v-for="(category, i) in categories"
            :key="i"
            :label="category.name"
            :value="category._id">
          </el-option>
        </el-select>
      </div>

      <ul v-if="category">
        <NuxtLink 
          v-for="(item, index) in categoryItemsList"
          :key="index"
          :to="{ path: `/single-item`, query: { id: item._id, category } }"
          class="mb-2">
          <li class="card">
            <img :src="item.downloadURL" alt="">
            <div class="card-info">
              <p class="font-semibold text-white leading-6"> {{ item.title }} </p>
            </div>
          </li>
        </NuxtLink>
      </ul>

    </div>
  </div>
</template>

<script>

  export default {
    name: "CategoriesPage",
    props: {
      title: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        categories: [],
        categoryItemsList: [],
        filterCategory: null,
        tempCategoryArray: [],
        selectedFitler: ''
      }
    },

    async mounted() {
      try {
        const { data: response } = await this.$axios.get(`${process.env.domain}/api/get-${this.category}`)
        if (response.doc) {
          this.categoryItemsList = response.doc
          if (this.category === 'music') { 
            this.$store.dispatch(`setMusic`, this.categoryItemsList)
          } else if (this.category === 'prayer') {
            this.$store.dispatch(`setPrayers`, this.categoryItemsList)
          } else if (this.category === 'katisashi') {
            this.$store.dispatch(`setKatisashi`, this.categoryItemsList)
          } 
        }
      } catch (error) {
        error.response ? console.log(error.response) : console.log(error)
      }  

      try {
        const { data: response } = await this.$axios.get(`${process.env.domain}/api/get-categories`)
        if (response.doc) {
          this.categories = response.doc.filter(doc => doc.type === `${this.category}`)
        }
      } catch (error) {
        error.response ? console.log(error.response) : console.log(error)
      }  
    },

    methods: {
      async showCatergoryItems(categoryId) {
        try {
          const { data: response } = await this.$axios.get(`${process.env.domain}/api/get-${this.category}`)
          if (response.doc) {
            this.categoryItemsList = response.doc.filter(doc => doc.categoryId === categoryId)
          }
        } catch (error) {
          error.response ? console.log(error.response) : console.log(error)
        }
      },

      changeFilter(categoryId) {
        if (this.tempCategoryArray.length > 0 && this.selectedFitler !== categoryId) {
          this.categoryItemsList = this.tempCategoryArray
          const filterCategory = this.categoryItemsList.filter(doc => doc.categoryId === categoryId)
          this.categoryItemsList = filterCategory
          this.selectedFitler = categoryId
        } else {
          this.tempCategoryArray = this.categoryItemsList
          const filterCategory = this.categoryItemsList.filter(doc => doc.categoryId === categoryId)
          this.categoryItemsList = filterCategory
          this.selectedFitler = categoryId
        }
      },

      resetFilter() {
        this.categoryItemsList = this.tempCategoryArray
      },
    }
  }
</script>

<style scoped>

  select { color: rgba(128, 128, 128, 0.866); }
  .selectbox {
    border-radius: 10px !important;
    padding: 0 1em 0 1em;
    width: 50%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
    justify-content: flex-start; 
  }
  li.card {
    position: relative;
    display: flex;
    flex-grow: 1;
    width: 139px;
    min-height: 139px;
    border-radius: 12px;
    align-items: flex-end;
    max-width: 35ch;
    padding: 1rem 1rem;
    background-color: #ddd;
  }
  .card > img {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    height: 100%;
  }
  .card-info {
    position: relative;
    z-index: 999;
    opacity: 1;
  }
</style>