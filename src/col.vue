<template>
  <div class="col" 
    :class="colClass"
    :style="computedColStyle">
      <slot></slot>
  </div>
</template>

<script>
let validator = (val) => {
  let valid = true
  Object.keys(val).forEach((key)=>{
    if(!['span', 'offset'].includes(key)) {
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
    phone: {
      type: Object,
      validator,
    },
    phone: {
      type: Object,
      validator
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
      const { span, offset, phone, ipad, narrowPc, pc, widePc } = this
      return [ 
        span && `col-${span}`, 
        offset && `offset-${offset}`,
        ...[phone && phone.span && [`col-phone-${phone.span}`]],
        // ...([`col-ipad-${ipad.span}`]),
        // ...(narrowPc && [`col-narrowPc-${narrowPc.span}`]),
        // ...(pc && [`col-pc-${pc.span}`]),
        // ...(widePc && [`col-widePc-${widePc.span}`]),
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
  methods: {}
}

</script>
<style lang='less'>
  .col{
    height: 100px;
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
  @media (max-width: 576px) {
    .col {
      @class: col-phone-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);
    }
  }
  @media (max-width: 577px) and (max-width: 768px) {
    .col {
      @class: col-ipad-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);
    }
  }
  @media (max-width: 769px) and (max-width: 992px) {
    .col {
      @class: col-narrow-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);
    }
  }
  @media (max-width: 993px) and (max-width: 1200px) {
    .col {
      @class: col-pc-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);
    }
  }
  @media (moin-width: 1201px) {
    .col {
      @class: col-wide-pc-;
      .col-loop(@n) when (@n>0){
        &.@{class}@{n}{
            width: @n/24*100%;
        }
        .col-loop((@n)-1);
      }
      .col-loop(24);
    }
  }
</style>