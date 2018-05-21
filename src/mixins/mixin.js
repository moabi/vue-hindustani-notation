export default {
    data: function () {
      return {
          notes:{
              s:{
                  name: 'SA',
                  html: '<span>S</span>'
              },
              S:{
                  name: 'SA',
                  html: '<span class="upper">S</span>'
              },
              r: {
                  name : 'RE',
                  html: '<span>r</span>'
              },
              rk: {
                  name : 'RE',
                  html: '<span class="komal">r</span>'
              },
              R:{
                  name: 'upper RE',
                  html: '<span class="upper">R</span>'
              },
              Rk:{
                  name: 'upper RE Komal',
                  html: '<span class="upper komal">R</span>'
              },
              g:{
                  name: 'GA',
                  html: '<span>G</span>'
              },
              G:{
                  name: 'upper GA',
                  html: '<span class="upper">G</span>'
              },
              gk:{
                  name: 'GA Komal',
                  html: '<span class="komal">G</span>'
              },
              Gk:{
                  name: 'GA',
                  html: '<span class="upper komal">G</span>'
              },
              M:{
                  name: 'MA',
                  html: '<span>M</span>'
              },
              P:{
                  name: 'PA',
                  html: '<span>P</span>'
              },
              d:{
                  name: 'DA Komal',
                  html: '<span class="komal">d</span>'
              },
              D:{
                  name: 'DA',
                  html: '<span class="upper">D</span>'
              },
              Dk:{
                  name: 'DA',
                  html: '<span class="upper komal">D</span>'
              },
              dk:{
                  name: 'DA Komal',
                  html: '<span class="komal">d</span>'
              },
              n:{
                  name: 'NI',
                  html: '<span>N</span>'
              },
              N:{
                  name: 'NI',
                  html: '<span class="upper">N</span>'
              }
              ,
              nk:{
                  name: 'NI',
                  html: '<span class="komal">N</span>'
              },
              Nk:{
                  name: 'NI',
                  html: '<span class="upper komal">N</span>'
              }
          },

      }
    },
    computed: {

    },
    methods:{
        azerty(k){
            let t = this.notes;
            switch(k) {
                case 'a':
                    return t.s;
                case 'A':
                    return t.S;
                case 'z':
                    return t.r;
                case 'q':
                    return t.rk;
                case 'Z':
                    return t.R;
                case 'e':
                    return t.g;
                case 'E':
                    return t.G;
                case 's':
                    return t.gk;
                case 'S':
                    return t.Gk;
                case 'r':
                    return t.m;
                case 'R':
                    return t.M;
                case 'd':
                    return t.mk;
                case 'D':
                    return t.Mk;
                case 't':
                    return t.p;
                case 'T':
                    return t.P;
                case 'y':
                    return t.d;
                case 'Y':
                    return t.D;
                case 'g':
                    return t.dk;
                case 'G':
                    return t.DK;
                case 'u':
                    return t.n;
                case 'U':
                    return t.N;
                case 'h':
                    return t.nk;
                case 'H':
                    return t.Nk;
                default:
                    return false;
            }
        },
        changeBeat (b) {
            //console.log('test', b);
            this.beats = b;
        },
        changeTaal (b) {
            console.log('test changing Taal',b);
            this.selectedTaal = b;
        },
        isMark (i) {
            let v = this.selectedTaal.beat.d;
            return v.indexOf(parseInt(i,10)) !== -1 ? 'mark': 'no-mark';
        }
    },
    mounted () {
        //let st = this.selectedTaal;
        //console.log(Object.keys(st)[0]);
    }
};