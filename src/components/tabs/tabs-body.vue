<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KomaTabsBody',
  components: {},
  inject: ['eventBus'],
  data () {
    return {
      active: false,
    };
  },
  methods: {}
}

</script>
