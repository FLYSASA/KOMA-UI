<template>
   <div class="wrapper" :class="{error}">
      <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
         @change="$emit('change', $event)"
         @blur="$emit('change', $event)"
         @input="$emit('change', $event)"
         @focus="$emit('change', $event)"
      />
      <template v-if="error">
         <g-icon name="error" class="icon-error"></g-icon>
         <span class="error-msg">{{error}}</span>
      </template>
   </div>
</template>

<script>
import Icon from './icon';
export default {
   name: 'KomaInput',
   components: {
      'g-icon': Icon
   },
   props: {
      value: {
         type: String
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
         type: String,
         default: ''
      }
   },
   data () {
      return {

      };
   },

   components: {},

   watch: {},

   computed: {},

   methods: {}
}
</script>
<style lang='less' scoped>
   @height: 32px;
   @border-color: #999;
   @hover-border-color: #666;
   @disabled-border-color: #bbb;
   @border-radius: 4px;
   @font-size: 12px;
   @box-shadow-color: rgba(0, 0, 0, 0.5);
   @red: #F14530;
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
         .error-msg {
            color:@red;
         }
      }
   }
</style>