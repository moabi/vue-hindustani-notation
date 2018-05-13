<template>
  <div class="taan-list">

    <div v-for="(o,key) in taan" :key="'idtaan-'+ key" class="section-wrapper">
      <div class="field is-horizontal">
        <div class="field">
          <input type="text" class="input material-input" v-model="o.title">
        </div>
        <div class="field">
          <button class="button is-danger is-small" @click="removeSection" title="Remove section">X</button>
        </div>
      </div>

      <div class="composition-wrapper">
        <div v-for="(c,key1) in o.composition"
             draggable="true"
             :key="'idcomposition'+key1"
             class="has-text-centered composition-item"
             :class="'it-'+key1">
          <div class="item-wrapper">
            <div class="c-part"
                 v-for="(b,index) in selectedTaal.beat.t"
                 :style="{width: 100/beats+'%'}"
                 :class="isMark(index)"
                 :key="'iditem'+index"

            >
              <input :title="index+1" v-model="c[b-1]"
                     class="input"
                     :id="'it'+b"
                     type="text"
                     value="">
              <div class="notation">
                {{c[b-1] | tonotation}}
              </div>
            </div>
            <button class="button rm-line" @click="removeLine(key1)">X</button>
          </div>
        </div>

        <p>
          <button class="button is-primary is-small" @click="addLine(key)">
            Add a line
          </button>
        </p>
      </div>

    </div>

    <div class="is-grouped-multiline">
      <button class="button is-info is-small" @click="addSection">
        Add a section
      </button>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'Taan',
        data: function () {
            return {
                /**
                 * Nested object
                 * containing the number of beats in a number of desired lines
                 */
                taan: {
                    0: {
                        title: 'Your section title',
                        composition: {
                            0: []
                        }
                    }
                },
                event: null
            };
        },
        computed: {
            taanFiltered: function () {
                return [];
            }
        },
        filters: {
            tonotation: function (value) {
                if (!value) return '-'
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        methods: {
            addLine: function (k) {
                let $self = this,
                    t = $self.taan[k].composition,
                    l = Object.keys(t).length;
                app.__vue__.$set(t, l, []);

            },
            addSection: function () {
                let $self = this,
                    t = this.taan,
                    l = Object.keys(t).length,
                    o = {
                        title: 'Your section title',
                        composition: {
                            0: []
                        }
                    };
                app.__vue__.$set(t, l, o);

            },
            removeSection: function () {
                let $self = this,
                    t = this.taan,
                    l = Object.keys(t).length,
                    o = {
                        title: 'Your section title',
                        composition: {
                            0: []
                        }
                    };
                app.__vue__.$set(t, l, o);

            },
            /**
             * Limit value of input to authorised char
             *
             * */
            isValidInput: function (evt) {
                console.log(evt);
                //evt = (evt) ? evt : window.event;

                /*let charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }*/
            },
            removeLine: function (index) {

            }
        }
    }
</script>


