<template>
  <div></div>
</template>

<script>
export default {
  name: 'KomaTableColumn',
  components: {},
  props: {
    text: {
      type: String,
      required: true 
    },
    prop: {
      type: String,
      required: true 
    },
    width: {
      type: Number,
    }
  }
};
</script>
