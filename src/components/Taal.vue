<template>
  <div class="taal-list">
        <div class="field is-grouped">
          <div class="control">
            <div class="select">
              <select name="taal" v-model="selected" class="select is-fullwidth" v-on:change="changeT">
                <option v-for="o in taals" :value="o">
                  {{ o.text }}
                </option>
              </select>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
    export default {
        name: 'Taal',
        props: {
            selectedTaal : Object
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
                    },
                    matta: {
                        text: 'Matta',
                        beat: {
                            t: 9,
                            d: [3,6,8]
                        },
                        bowls: [
                            'Dhin','TiRaKiTa','Dhin' ,'Na','Tun','Na','Dhin','Dhin','Na'
                        ]
                    }
                }

            };
        },
        computed: {},
        watch: {
            selected: function (val) {
                this.changeBeat(val.beat.t);
            }
        },
        mounted: function () {
            this.selected = this.taals.teentaal;
        },
        methods: {
            changeT: function () {
                //console.log('changeT');
                let b = this.selected;
                this.$emit('changtaal',b);
            }

        }
    }
</script>
