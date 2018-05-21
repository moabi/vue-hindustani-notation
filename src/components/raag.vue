<template>
  <div class="raag-list">
    <div class="columns">
      <div class="column is-3">
        <div class="field is-grouped">
          <div class="control">
            <div class="select">
              <select v-model="selected" v-on:change="changR">
                <option v-for="o in options" :value="o">
                  {{ o.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="control">
            <div class="button is-rounded">?</div>
          </div>
        </div>

      </div>
      <div class="column is-hidden">
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
                    },
                    marwa :{
                        slug: 'marwa',
                        text: 'Marwa',
                        desc:"Thaat: Marwa).\n" +
                        "Puriya and Sohni have the same tonal material. In Puriya Ni and specially Ga are emphasised.\n" +
                        "Komal re of Marwa is slightly higher than komal re of Bhairavi\n" +
                        "According to O.Thakur Pūrvā Kalyāṇa is Marwa with Pa and less emphasis on komal Re. R. Jha treats Bhaṭiya as a mixture of Marwa and Maand. There is only one Author (B. Subba Rao) mentioning a raga Māravā Gaurī, thus Moutal does not consider this an own form. Aspects of Marwa are also incorporated in Mali Gaura\n" +
                        "For western listeners the tone material may feel strange. As the sixth is emphasised while the tonic is omitted it may feel like playing in A Major, while the base tone is C (not C sharp). If the musician turns back to Sa at the end of a phrase it always comes like a surprise note.",
                        aroha: 'Ṇi re_ Ga Ma_ Dha Ni re# S',
                        avroha: 're_ Ni Dha Ma_ Ga re Ṇ Ḍ S'
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
