<template>
  <div class="taal-template">
    <p><strong>{{selectedRaag.text}}</strong> in <strong>{{selectedTaal.text}}</strong> -
      <i>
      Aroha: {{selectedRaag.aroha}},
      Avroha: {{selectedRaag.avroha}}
      </i>
    </p>
    <div class="field is-horizontal">
      <div class="has-text-centered composition-item c-part" v-for="o,k in selectedTaal.bowls"
           :class="isMark(k)"
           :style="{width: 100/selectedTaal.bowls.length+'%'}">
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
            selectedTaal : Object,
            selectedRaag : Object,
        }
    }
</script>
