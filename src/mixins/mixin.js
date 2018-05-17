export default {
    data: function () {
      return {
          notes:{
              S:{
                  name: 'SA',
                  html: '<span>S</span>'
              },
              R:{
                  name: 'RE',
                  html: '<span>R</span>'
              },
              r: {
                  name : 'RE Komal',
                  html: '<span class="komal">r</span>'
              },
              G:{
                  name: 'GA',
                  html: '<span>G</span>'
              },
              M:{
                  name: 'MA',
                  html: '<span>M</span>'
              },
              m:{
                  name: 'Ma Komal',
                  html: '<span>m</span>'
              },
              P:{
                  name: 'PA',
                  html: '<span>P</span>'
              },
              D:{
                  name: 'DA',
                  html: '<span>D</span>'
              },
              d:{
                  name: 'DA Komal',
                  html: '<span>d</span>'
              },
              N:{
                  name: 'NI',
                  html: '<span>N</span>'
              }
          }
      }
    },
    computed: {

    },
    methods:{
        changeBeat:function (b) {
            //console.log('test', b);
            this.beats = b;
        },
        changeTaal:function (b) {
            console.log('test changing Taal',b);
            this.selectedTaal = b;
        },
        isMark:function (i) {
            let v = this.selectedTaal.beat.d;
            return v.indexOf(parseInt(i,10)) !== -1 ? 'mark': 'no-mark';
        }
    },
    mounted:function () {
        //let st = this.selectedTaal;
        //console.log(Object.keys(st)[0]);
    }
};