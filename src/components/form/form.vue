<template>
  <form class="form" @submit.prevent>
    <slot></slot>
  </form>
</template>

<script>
import Validate from './validate';
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

  computed: {},

  mounted() {
    this.updatedChildren()
  },

  updated(){
    this.checkError()
    this.updatedChildren()
  },

  methods: {
    updatedChildren() {
      this.childItems.forEach((i)=>{
        if(this.errors[i.prop]) {
          i.error = this.errors[i.prop]
        } else {
          i.error = {}
        }
      })
    },
    addItem(item){
      this.childItems.push(item)
    },
    checkError(){
      const rules = this.rules
      this.errors = this.validator.validate(this.model, rules)
    },
    validate(fn){
      this.checkError()
      this.updatedChildren()
      const valid = Object.keys(this.errors).length === 0
      fn(valid);
    }
  },
};
</script>
<style lang='less' scoped>
</style>
