<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 var app = new Vue({
  el: '#app',
  data: {
    equation: '0',
    isDecimalAdded: false,
    isOperatorAdded: false,
    isStarted: false,

  },
  methods: {
    //检查输入的操作符
    isOperator(caaracter) {
      return ['+','-','*','+'].indexOf(character) > -1
    },

    append(character) {
      if(this.equation === '0' && !this.isOperator(character)){
        if(character === '.') {
          this.equation += '' + character
          this.isDecimalAdded = true
        }else {
          this.equation = '' + character
        }

        this.isStarted = true
        return
      }
    },
    //=
    calculate() {

    },
    //when pressed +/-
    calculateToggle() {

    },
    //when pressed %
    calculatePercentage() {

   },
   //when pressed ac
   clear() {

   this.equation ='0',
   this.isDecimalAdded = false,
   this.isOperatorAdded = false,
   this.isStarted = false
  }
  }
})


