<template>
  <div class="raag-list">
    <div class="columns">
      <div class="column is-3">
        <div class="select">
          <select v-model="selected" v-on:change="changR">
            <option v-for="o in options" :value="o">
              {{ o.text }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <h3 class="title">{{selected.text}}</h3>
        <p>{{selected.desc}}</p>
        <div class="section">
          <ul>
            <li>Aroha : {{selected.aroha}}</li>
            <li>Avroha : {{selected.avroha}}</li>
          </ul>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: 'Raag',
        data: function () {
            return {
                selected: 'kafi',
                options: {
                    kafi : {
                        text: 'Kafi',
                        desc:'Its minor third komal Ga puts Kafi amongst the melancholic ragas. It belongs to the thumri semi-classical genre. Very expressive melodies can be created using it. Resting on the Re or the Pa creates expection moods.',
                        aroha: 'S R g M P D n S',
                        avroha: 'S n D P M g R S'
                    },
                    malkauns :{
                        text: 'Malkauns',
                        desc:'Malkauns is a serious, meditative raga, and is developed mostly in the lower octave (mandra saptak) and in a slow tempo (vilambit laya). Ornaments such as meend, gamak and andolan are used rather than \'lighter\' ornaments such as murki and khatka. Komal Ni is generally considered the starting note (graha swara), and the notes komal Ga and komal Dha are performed with vibrato (andolit). All five swaras can function as pausing notes.\n' +
                        '\n' +
                        'The komal Ni in Malkauns is different from the komal Ni in Bhimpalasi.\n' +
                        '\n' +
                        'The best time for this raga is late night. The effect of the raga is soothing and intoxicating.',
                        aroha: 'S g M d n',
                        avroha: 'S n d M g S'
                    }
                }

            };
        },
        methods:{
            changR:function () {
                let b = this.selected;
                this.$emit('changraag',b);
            }
        },
        mounted:function () {
            this.selected = this.options.kafi;
        }
    }
</script>
