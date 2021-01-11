<template>
  <form class="koma-form" @submit.prevent>
    <slot></slot>
  </form>
</template>

<script>
import Validate from './validate';
function debounce(fn, delay) {
  let _delay = delay || 200;
  return function (args) {
    let _this = this
    let _args = args
    fn.id && clearTimeout(fn.id)
    fn.id = setTimeout(function () {
      fn.call(_this, _args)
    }, _delay)
  }
}
export default {
  name: 'KomaForm',
  components: {},
  provide(){
    return {
      root: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Array
    }
  },
  data() {
    return {
      validator: new Validate(),
      childItems: [],
      errors: {}
    };
  },

  watch: {
    model: {
      handler(val) {
        this.checkError()
      },
      deep: true
    }
  },
  // updated(){
  //   this.checkError()
  // },

  created() {
    console.log(this.model)
  },

  methods: {
    addItem(item){
      this.childItems.push(item)
    },
    checkError: debounce( function () {
      const rules = this.rules
      this.errors = this.validator.validate(this.model, rules)

      this.childItems.forEach((i)=>{
        if(this.errors[i.prop]) {
          i.error = this.errors[i.prop]
        } else {
          i.error = {}
        }
      })
    }),
    validate(fn){
      this.checkError()
      const valid = Object.keys(this.errors).length === 0
      fn(valid, this.errors);
    }
  },
};
</script>
