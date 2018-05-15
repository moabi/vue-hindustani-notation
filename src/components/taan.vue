<template>
  <div class="taan-list">

    <div v-for="(o,key) in taan" :key="'idtaan-'+ key" class="section-wrapper">
      <div class="field is-horizontal">
        <div class="field">
          <input type="text" class="input material-input" v-model="o.title">
        </div>
        <div class="field">
          <button class="button is-small" @click="removeSection(key)" title="Remove section">
            Remove section</button>
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
                     maxlength="6"
                     type="text"
                     value="">
              <div class="notation" v-html="toNotation(c[b-1])">

              </div>
            </div>
            <button class="button is-small rm-line" @click="removeLine(key,key1)">Remove Line</button>
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
            removeSection: function (key) {
                let $self = this,
                    t = this.taan;
                app.__vue__.$delete(t,key);

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
            toNotation: function (value) {
                //console.log(value);
                if (!value) return '-';
                value = value.toString();

                let output = '';
                for (let i = 0; i < value.length; i++) {
                    let n = value.charAt(i).toString();
                    console.log(n);
                    if(typeof this.notes[n] !== 'undefined'){
                        let k = this.notes[n];
                        output += (typeof k.html !== 'undefined') ? k.html : '';
                    }

                }
                return output;
            },
            removeLine: function (compositionIndex, lineIndex) {
                let $self = this,
                    t = $self.taan[compositionIndex].composition;

                app.__vue__.$delete(t, lineIndex);
            }
        }
    }
</script>


