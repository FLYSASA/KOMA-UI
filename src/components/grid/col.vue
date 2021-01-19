<template>
  <div class="koma-col" 
    :class="colClass"
    :style="computedColStyle">
      <slot></slot>
  </div>
</template>

<script>
let validator = (val) => {
  let valid = true
  Object.keys(val).forEach((key)=>{
    if(!(['span', 'offset'].indexOf(key) >= 0)) {
      valid = false
    }
  })
  return valid;
}
export default {
  name:'KomaCol',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data () {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass(){
      const { span, offset, ipad, narrowPc, pc, widePc } = this
      return [ 
        this.createClass({span, offset}), 
        this.createClass(ipad, 'ipad-'),
        this.createClass(narrowPc, 'narrow-pc-'),
        this.createClass(pc, 'pc-'),
        this.createClass(widePc, 'wide-pc-'),
      ]
    },
    computedColStyle(){
      return {
        // 不能直接这么写， padding: `0 ${this.gutter}px`
        paddingLeft: `${this.gutter/2}px`,
        paddingRight: `${this.gutter/2}px`,
      }
    },
  },
  created () {
  },
  mounted () {},
  methods: {
    createClass(obj, str = '') {
      // str: ipad-, narrow-pc-, pc-, wide-pc- 
      if(!obj){return []}
      let arr = [];
      if (obj.span) {
        arr.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        arr.push(`offset-${str}${obj.offset}`)
      }
      return arr;
    }
  }
}

</script>
<style lang='less'>
  .koma-col{
    // height: 100px;
    // &.col-1{
    //   width: 1/24%;
    // }
    @class: col-;
    .col-loop(@n) when (@n>0){
      &.@{class}@{n}{
          width: @n/24*100%;
      }
      .col-loop((@n)-1);
    }
    .col-loop(24);

    @offset: offset-;
    .offset-loop(@n) when (@n>0){
      &.@{offset}@{n}{
          margin-left: @n/24*100%;
      }
      .offset-loop((@n)-1);
    }
    .offset-loop(24)
  }
  @media (min-width: 577px) {
    .koma-col {
      @class: col-ipad-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);

      @offset: offset-ipad-;
      .offset-loop(@n) when (@n>0){
        &.@{offset}@{n}{
            margin-left: @n/24*100%;
        }
        .offset-loop((@n)-1);
      }
      .offset-loop(24)
    }
  }
  @media (min-width: 769px) {
    .koma-col {
      @class: col-narrow-pc-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);

      @offset: offset-narrow-pc-;
      .offset-loop(@n) when (@n>0){
        &.@{offset}@{n}{
            margin-left: @n/24*100%;
        }
        .offset-loop((@n)-1);
      }
      .offset-loop(24)
    }
  }
  @media (min-width: 993px) {
    .koma-col {
      @class: col-pc-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);

      @offset: offset-pc-;
      .offset-loop(@n) when (@n>0){
        &.@{offset}@{n}{
            margin-left: @n/24*100%;
        }
        .offset-loop((@n)-1);
      }
      .offset-loop(24)
    }
  }
  @media (min-width: 1201px) {
    .koma-col {
      @class: col-wide-pc-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);

      @offset: offset-wide-pc-;
      .offset-loop(@n) when (@n>0){
        &.@{offset}@{n}{
            margin-left: @n/24*100%;
        }
        .offset-loop((@n)-1);
      }
      .offset-loop(24)
    }
  }
</style>