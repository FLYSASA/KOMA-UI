<template>
  <div class="koma-form-item">
    <label>{{label}}</label>
    <div class="controls">
      <slot></slot>
      <div class="error-text">
        {{ error && Object.values(error)[0]}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KomaFormItem',
  components: {},
  props: {
    label: {
      type: String,
      required: true
    },
    prop: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      error: {}
    };
  },
  watch: {},
  inject: ['root'],

  computed: {},

  created() {
    this.root.addItem(this)
  },

  methods: {},
};
</script>
<style lang='less' scoped>
@import '../../css/_var';
.koma-form-item {
  margin-bottom: 8px;
  display: flex;
  label {
    margin-right: 1em;
  }
  .error-text {
    font-size: @small-font-size;
    color: @red;
  }
}
</style>
