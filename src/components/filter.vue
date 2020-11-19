<template>
  <div>
    <section class="filter-wrapper">
      <div class="title">{{title}}</div>
      <ul class="filter-ul">
        <li v-for="i in datas" :key="i.value" @click="tabs(i)"> {{i.label}} </li>
      </ul>
    </section>
    <filterItem
      v-if="showChild && computedParent && computedParent.children"
      title=""
      :parent="computedParent"
      :datas="computedParent.children"
    ></filterItem> 
  </div>
</template>

<script>
export default {
  name: 'filterItem',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    datas: {
      type: Array,
      default(){
        return [
            {
              label: '1-1',
              value: '1-1',
              children: [
                {
                  label: '1-1-1',
                  value: '1-1-1',
                  children: [
                    {
                      label: '1-1-1-1',
                      value: '1-1-1-1',
                      children: [
                        {
                          label: '1-1-1-1-1',
                          value: '1-1-1-1-1',
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: '2-1',
              value: '2-1',
              children: [
                {
                  label: '2-1-1',
                  value: '2-1-1',
                  children: []
                }
              ]
            }
          ]
      }
    }
  },
  data() {
    return {
      showChild: false,
      activeItem: null,
    };
  },
  computed: {
    computedParent(){
      return this.activeItem;
    },
  },

  created() {},

  methods: {
    tabs(i){
      // 重置掉筛选区, 不重置掉的话页面数据显示错乱
      this.showChild = false
      this.$nextTick(()=>{
        this.showChild = true
      })
      this.activeItem = i
      this.getLabels([])
    },
    getLabels(arr) {
      arr.push(this.activeItem.label)
      if(this.$attrs.parent){
        this.$parent.getLabels(arr)
      }
      console.log(arr)
    },
  },
};
</script>
<style lang='less' scoped>
.filter-wrapper {
  * {
    list-style: none;
  }
  display: flex;
  .title {
    width: 120px;
    font-weight: 100;
  }
  .filter-ul {
    display: flex;
    li {
      width: 100px;
      cursor: pointer;
    }
  }
}
</style>
