<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'KomaToast',
  components: {},
  props: {},
  data () {
    return {
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
@font-size: 14px;
@toast-height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: @font-size;
  line-height: 1.8;
  height: @toast-height;
  background: @toast-bg;
  color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  border-radius: 4px;
}
</style>