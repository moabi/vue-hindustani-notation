<template>
  <div id="app">
    <raag />
    <Taal />
    <Taan :beats="beats"/>
  </div>
</template>

<script>

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
      Taal,
      Raag,
      Taan
  }
}


</script>

