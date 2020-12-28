<template>
   <div class="wrapper" :class="{error}">
      <input ref="input" :value="value" :disabled="disabled" :readonly="readonly" 
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      type="text"/>
      <template v-if="error">
         <k-icon name="error" class="icon-error" v-if="error"></k-icon>
         <span class="errorMessage">{{error}}</span>
      </template>
   </div>
</template>

<script>
import Icon from './icon.vue';
export default {
   name: 'KomaInput',
   components: {
      'k-icon': Icon
    },
   props: {
      value: {
         type: String | Date
      },
      disabled: {
         type: Boolean,
         default: false
      },
      readonly: {
         type: Boolean,
         default: false
      },
      error: {
         type: String
      }
   },
   data () {
      return {

      };
   },
   computed: {},

   methods: {
      setRawValue (value) {
         this.$refs.input.value = value
      }
   }
}
</script>
<style lang='less' scoped>
   @import '../../css/_var';
   @height: @input-height;
   .wrapper {
      display: inline-flex;
      align-items: center;
      font-size: @font-size;
      *:not(:last-child) {
         margin-right: .5em;
      }
      > input {
         height: @height;
         border: 1px solid @border-color;
         border-radius: @border-radius;
         padding: 4px;
         font-size: inherit;
         outline: none;
         &:hover {
            border-color: @hover-border-color;
         }
         &:focus{
            box-shadow: inset 0 1px 3px @box-shadow-color;
         }
         &[disabled]{
            color: #bbb;
            border: 1px solid @disabled-border-color;
            cursor: not-allowed; 
         }
      }
      &.error {
         > input {
            border: 1px solid @red;
         }
         .icon-error {
            fill: @red;
         }
         .errorMessage {
            color:@red;
         }
      }
   }
</style>