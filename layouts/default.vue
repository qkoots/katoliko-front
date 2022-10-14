<template>
  <div class="main min-h-screen">
    <NavigationNavbar class="navbar" />
    <Nuxt class="px-4" />
    <About v-if="$route.path === '/'"/>
    <NavigationFooter id="footer" />
  </div>
</template>

<script>
import About from '../components/About.vue';
export default {
    name: "DefaultLayoutPage",
    components: { About }
}
</script>

<style>

body {
  font-family: 'Poppins', sans-serif;
  letter-spacing: .02rem;
}

.main {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

h1, h2, h3, h4, h5 {
  color: #2B1C44;
  font-weight: 600;
}

h1 {
  font-size: 38px;
  Line-height: 57px;
}

h2 {
  font-size: 32px;
  line-height: 48px;
}

h3 {
  font-size: 28px;
  line-height: 42px;
}

h4 {
  font-size: 24px;
  line-height: 38px;
}

h5 {
  font-size: 18px;
  line-height: 32px;
}

p {
  font-size: .9rem;
  color: #494949;
  font-size: 14px !important;
}

.navbar {
  border-radius: 0px 0px 12px 12px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 10px rgba(0, 34, 85, 0.05);
  backdrop-filter: blur(12px);
}

.title-bar {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0px 0px 24px 24px;
  margin: -2.5em -1em 40px;
}

iframe[id*=youtube-player-] {
  height: 166px;
  width: 100% !important;
  border-radius: 12px;
}

#footer {
  width: 100%;
  /* height: 120px; */
  /* padding: 1.5rem 0 .5rem; */
  padding: 1.5rem 0;
  background-color:#45455E;
}

.date {
  color: #5F5F5F;
  font-size: 12px !important;
}

.link {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  padding: 14px 40px;
  border-radius: 20px;
}

.link.day {
  background: linear-gradient(90deg, #FF5F6D 0%, #FFC371 100%);
}

.link.night {
  background: rgba(255, 255, 255, 0.6);
  color: #2B1C44;
}

.el-calendar {
  border-radius: 24px;
  box-shadow: 2px 3px 21px 0px rgba(62, 73, 73, 0.1) !important;
}

.el-calendar__header {
  padding: 2em 37px 1em !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-calendar__header .el-calendar__title {
  margin-bottom: 1em;
}

.el-calendar__body {
  padding: 0px 20px 20px !important;
}

.el-calendar-table td, .el-calendar__header {
  border: none !important;
}

.el-calendar-table thead th {
  color: #494949 !important;
  font-size: 10px !important;
}

.el-calendar-table .el-calendar-day,
.el-calendar-table .el-calendar-day:hover {
  text-align: center;
  height: 38px !important;
}

.el-calendar-table .current.is-today,
.el-calendar-table .el-calendar-day:hover {
  background: linear-gradient(90deg, #FF5F6D 0%, #FFC371 100%);
  border-radius: 64px;
}

.el-calendar-table .current.is-today {
  padding-top: 0.2em;  
}

.el-calendar-table .current.is-today p, 
.el-calendar-table .current .el-calendar-day p:hover {
  color: #fff;
}

.el-calendar-table__row .next .el-calendar-day p {
 color: #C0C4CC;
}

.vueperslides, .vueperslides__inner,
.vueperslides__track {
  height: 100px !important;
}

.vueperslides__parallax-wrapper:before,
.vueperslides__parallax-wrapper::after {
  box-shadow: none !important;
}

.vueperslide {
  width: fit-content !important;
}

.vueperslide__content-wrapper {
  height: 60% !important;
}

.vueperslide__title {
  background-color: #fff !important;
  padding: 8px 16px;
  border-radius: 70px
}

@media screen and (min-width: 1024px) {
  
  .title-bar {
    background: none;
    border-radius: none;
    margin: -2.5em -1em 40px;
  }
}
</style>