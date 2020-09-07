<template>
  <div class="col" 
    :class="[ span && `col-${span}`, offset && `offset-${offset}`]"
    :style="computedStyle">
    <div style="border: 1px solid red;height: 100%;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'KomaCol',
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    },
  },
  data () {
    return {
      gutter: 0,
    };
  },
  computed: {
    computedStyle(){
      console.log(this.gutter);
      return {
        // 不能直接这么写， padding: `0 ${this.gutter}px`
        paddingLeft: `${this.gutter}px`,
        paddingRight: `${this.gutter}px`,
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
  width: 50%;
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
</style>