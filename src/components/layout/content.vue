<template>
  <div class="content">
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
.content {
  flex-grow: 1;
}
</style>