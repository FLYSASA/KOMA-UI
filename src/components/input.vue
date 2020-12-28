<template>
   <div class="k-input-wrapper" :class="{error}">
      <input ref="input" :value="value" :disabled="disabled" :readonly="readonly"
      v-bind="$attrs"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      :type="type"/>
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
      type: {
         type: String,
         default: 'text'
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
   @import '../css/_var';
   @height: @input-height;
   .k-input-wrapper {
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
         padding: 0 8px;
         font-size: inherit;
         outline: none;
         width: 100%;
         color: @color;
         &::-webkit-input-placeholder {
            color: @input-holder-color;
         }
         &:-moz-placeholder {/* Firefox 18- */
            color: @input-holder-color;
         }
         &::-moz-placeholder{/* Firefox 19+ */
            color: @input-holder-color;
         }
         &::-ms-input-placeholder {
            color: @input-holder-color;
         }
         &:hover {
            border-color: @hover-border-color;
         }
         &:focus{
            // box-shadow: inset 0 1px 3px @box-shadow-color;
            border: 1px solid @primary-color;
         }
         &[disabled]{
            color: #bbb;
            border: 1px solid @disabled-border-color;
            cursor: not-allowed; 
            background-color: @disabled-color;
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
            min-width: 100px;
         }
      }
   }
</style>