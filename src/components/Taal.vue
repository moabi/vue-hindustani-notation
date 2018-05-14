<template>
  <div class="taal-list">
    <div class="columns">
      <div class="column">
        <h3 class="title">{{selected.text}}</h3>
      </div>
      <div class="column">
        <div class="field is-horizontal">
          <div class="control">
            <div class="select">
              <select name="taal" v-model="selected" class="select is-fullwidth">
                <option v-for="o in taals" :value="o">
                  {{ o.text }}
                </option>
              </select>
            </div>
          </div>
          <div class="control">
            <button type="submit" class="button is-danger">Change Taal</button>
          </div>

        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="has-text-centered composition-item c-part" v-for="o,k in selected.bowls"
           :class="isMark(k)"
           :style="{width: 100/selected.bowls.length+'%'}">
        <div class="raag-do">
          <span>{{o}}</span><span>{{k + 1}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Taal',
        props: {
            title: String
        },
        data: function () {
            return {
                selected: '',
                taals: {
                    teentaal: {
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
                    rupak: {
                        text: 'Rupak',
                        beat: {
                            t: 7,
                            d: [4]
                        },
                        bowls: [
                            'Dha', 'Dhin', 'Dhin', 'Dha',
                            'Dha', 'Dhin', 'Dhin'
                        ]
                    }
                }

            };
        },
        computed: {},
        watch: {
            selected: function (val) {
                this.changeBeat(val.beat.t);
                this.changeT(val);
                this.$emit("changeBeat", 12);
            }
        },
        mounted: function () {
            this.selected = this.taals.teentaal;
        },
        methods: {
            changeT: function (b) {
                //console.log('changeT');
                this.$emit('changeTaal', b);
            }

        }
    }
</script>
