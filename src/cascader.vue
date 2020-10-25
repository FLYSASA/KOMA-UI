<template>
  <div>
    <div class="cascader">
      <div class="trigger" @click="popoverVisible = !popoverVisible">
      </div>
      <div class="popover" v-if="popoverVisible">
        <div class="level1">
          <div class="label" v-for="item1 in datas" @click="selectedItem1 = item1">
            {{ item1.name }}
          </div>
        </div>
        <div class="level2">
          <div class="label" v-for="item2 in level2Items" @click="selectedItem2 = item2">
            {{ item2.name }}
          </div>
        </div>
        <div class="level3">
          <div class="label" v-for="item3 in level3Items" >
            {{ item3.name }}
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
    <!-- <div class="popover">
      <cascader-item v-for="item in datas" :sourceItem="item"></cascader-item>
    </div> -->
  </div>
</template>

<script>
import cascaderItem from './cascader-item'
export default {
  name: 'KomaCascader',
  components: { cascaderItem },
  props: {
    datas: {
      type: Array
    }
  },
  data() {
    return {
      popoverVisible: true,
      selectedItem1: null,
      selectedItem2: null,
    };
  },

  computed: {
    level2Items(){
      return this.selectedItem1 && this.selectedItem1.children || []
    },
    level3Items(){
      return this.selectedItem2 && this.selectedItem2.children || []
    }
  },

  created() {
    console.log(this.datas)
  },

  methods: {},
};
</script>
<style lang='less' scoped>
  @import './css/_var';
  .cascader {
    .trigger {
      border: 1px solid red;
      height: @input-height;
      width: 100px;
    }
    .popover {
      border: 1px solid red;
      height: 200px;
      position: relative;
      display: flex;
      .label {
        white-space: nowrap;
      }
    }
  }
</style>
