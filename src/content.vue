<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaContent',
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
.content {
  flex-grow: 1;
}
</style>