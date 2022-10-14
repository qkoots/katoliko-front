<template>
  <div> 
    <div class="w-full flex py-7 xl:w-12/12 2xl:w-12/12 mx-auto px-4 items-center">
      <NuxtLink
        to="/">
        <div class="w-3/12">
          <img src="../../static/logo.png" alt="">
        </div>
      </NuxtLink>

      <div class="w-full flex justify-end items-center lg:hidden">      
        <!-- Menu icon -->
        <button
          class="block ml-4 lg:hidden"
          @click="openSideBar">
          <svg
            width="36"
            height="19"
            viewBox="0 0 36 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="3" rx="1.5" fill="#786990" />
            <rect y="8" width="36" height="3" rx="1.5" fill="#786990" />
            <rect x="18" y="16" width="36" height="3" rx="1.5" fill="#786990" />
          </svg>
        </button>
      </div>

      <!-- Desktop menu -->
      <div class="w-full flex justify-end items-center hidden lg:block">
        <div class="flex justify-end items-center">
          <NuxtLink
            :class="
              `md:mr-9 lg:mr-5 cursor-pointer text-base  ` +
              ($nuxt.$route.path == `/`
                ? `border-bottom-2-orange primary-color`
                : `color-dark-gray`)
            "
            to="/calendar"
            >Kalènder
          </NuxtLink>
          <NuxtLink
            :class="
              `md:mr-9 lg:mr-5 cursor-pointer text-base  ` +
              ($nuxt.$route.path == `/prayer-categories`
                ? `border-bottom-2-orange primary-color`
                : `color-dark-gray`)
            "
            to="/prayers"
            >Orashon
          </NuxtLink>
          <NuxtLink
            :class="
              `md:mr-9 lg:mr-5 cursor-pointer text-base  ` +
              ($nuxt.$route.path == `/katisashi`
                ? `border-bottom-2-orange primary-color`
                : `color-dark-gray`)
            "
            to="/katisashi"
            >Katisashi
          </NuxtLink>
          <NuxtLink
            :class="
              `md:mr-9 lg:mr-5 cursor-pointer text-base  ` +
              ($nuxt.$route.path == `/music`
                ? `border-bottom-2-orange primary-color`
                : `color-dark-gray`)
            "
            to="/music"
            >Músika
          </NuxtLink>
          <NuxtLink
            :class="
              `md:mr-9 lg:mr-5 cursor-pointer text-base  ` +
              ($nuxt.$route.path == `/events`
                ? `border-bottom-2-orange primary-color`
                : `color-dark-gray`)
            "
            to="/events"
            >Evento
          </NuxtLink>
          <NuxtLink
            :class="
              `md:mr-9 lg:mr-5 cursor-pointer text-base  ` +
              ($nuxt.$route.path == `/contact`
                ? `border-bottom-2-orange primary-color`
                : `color-dark-gray`)
            "
            to="/contact"
            >Kontakto
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="lg:hidden z-50">
      <div :class=" (isSideBarOpen ? 'block' : 'hidden') + ' min-h-screen pt-20 sidebar'">
        <div class="flex flex-col items-center">
          <NuxtLink
            class="cursor-pointer px-4 py-6 font-semibold text-base primary-color"
            to="/calendar"
            @click.native="openSideBar">
            Kalènder
          </NuxtLink>
          <NuxtLink
            class="cursor-pointer px-4 py-6 font-semibold text-base primary-color"
            to="/prayers"
            @click.native="openSideBar">
            Orashon
          </NuxtLink>
          <NuxtLink
            class="cursor-pointer px-4 py-6 font-semibold text-base primary-color"
            to="/katisashi"
            @click.native="openSideBar">
            Katisashi
          </NuxtLink>
          <NuxtLink
            class="cursor-pointer px-4 py-6 font-semibold text-base primary-color"
            to="/music"
            @click.native="openSideBar">
            Músika
          </NuxtLink>
          <NuxtLink
            class="cursor-pointer px-4 py-6 font-semibold text-base primary-color"
            to="/events"
            @click.native="openSideBar">
            Evento
          </NuxtLink>
          <NuxtLink
            class="cursor-pointer px-4 py-6 font-semibold text-base primary-color"
            to="/contact"
            @click.native="openSideBar">
            Kontakto
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavBarComponent',

    data() {
      return {
        isSideBarOpen: false,
      }
    },

    methods: {
      openSideBar() {
        this.isSideBarOpen = !this.isSideBarOpen
      }
    }
  }
</script>

<style scoped>
.sidebar {
  background: rgba(255, 255, 255, 0.6);
}
</style>