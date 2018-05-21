<template>
  <div id="app">
    <headerNav/>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column is-3">
            <Taal :selected-taal="selectedTaal" v-on:changtaal="changeSelectedTaal" />
          </div>
          <div class="column is-3">
            <raag v-on:changraag="changeSelectedRaag"/>
          </div>
        </div>
        <TaalTemplate :selected-taal="selectedTaal" :selected-raag="selectedRaag" />
        <Taan :selected-taal="selectedTaal" />
      </section>
    </div>
  </div>
</template>

<script>

    import headerNav from './components/headerNav.vue';
    import Taal from './components/Taal.vue';
    import TaalTemplate from './components/TaalTemplate.vue';
    import Raag from './components/raag.vue';
    import Taan from './components/taan.vue';


    export default {
        name: 'app',
        data() {
            return {
                selectedTaal:{
                    slug: 'teentaal',
                    text: 'Teentaal',
                    beat: {
                        t: 16,
                        d: [4, 8, 12]
                    },
                    bowls: [
                        'Dha', 'Dhin', 'Dhin', 'Dha',
                        'Dha', 'Dhin', 'Dhin', 'Dha',
                        'Dha', 'Tin', 'Tin', 'Ta',
                        'Ta', 'Dhin', 'Dhin', 'Dha'
                    ]
                },
                selectedRaag: {
                    slug: 'kafi',
                    text: 'Kafi',
                    desc: 'Its minor third komal Ga puts Kafi amongst the melancholic ragas. It belongs to the thumri semi-classical genre. Very expressive melodies can be created using it. Resting on the Re or the Pa creates expection moods.',
                    aroha: 'S R g M P D n S',
                    avroha: 'S n D P M g R S'
                }
            }
        },
        methods: {
            changeSelectedTaal: function (b) {
                this.selectedTaal = b;
            },
            changeSelectedRaag: function (b) {
                this.selectedRaag = b;
            }
        },
        components: {
            headerNav,
            Taal,
            TaalTemplate,
            Raag,
            Taan
        }
    }


</script>

