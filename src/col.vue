<template>
  <div class="col" :class="[ span && `col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'KomaCol',
  props: {
    span: {
      type: [String, Number]
    }
  },
  data () {
    return {
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style lang='less'>
.col{
  height: 100px;
  background: gray;
  width: 50%;
  border: 1px solid green;
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
  .col-loop(24)
}
</style>