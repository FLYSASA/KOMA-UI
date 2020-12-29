<template>
  <div class="koma-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaContent',
  data () {
    return {
    };
  },
}

</script>
<style lang='less' scoped>
.koma-content {
  flex-grow: 1;
}
</style>