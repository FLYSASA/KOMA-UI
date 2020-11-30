<template>
  <div class="koma-pager">
    <span v-for="page in pages">
      {{page}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'KomaPager',
  components: {},
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required:true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    let pages = []
    for(let i = 1; i <= this.totalPage; i++) {
      pages.push(i)
    }
    return {
      pages
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style lang='less' scoped>
</style>