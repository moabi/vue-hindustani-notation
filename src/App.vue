<template>
  <div id="app">
    <headerNav />
    <div class="container">
      <section class="section">
        <raag />
        <Taal />
        <Taan />
      </section>
    </div>
  </div>
</template>

<script>

import headerNav from './components/headerNav.vue';
import Taal from './components/Taal.vue';
import Raag from './components/raag.vue';
import Taan from './components/taan.vue';


export default {
  name: 'app',
    data:function () {
      return {


      }
    },

  components: {
      headerNav,
      Taal,
      Raag,
      Taan
  }
}


</script>

