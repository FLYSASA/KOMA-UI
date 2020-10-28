<template>
  <div id="app">
    {{selected}}
    <g-cascader
      :selected="selected"
      :datas="cascaderDatas"
      @update:selected="selected = $event"
      popover-height="200px"></g-cascader>
  </div>
</template>

<script>
import Cascader from './cascader'
export default {
  name: 'demo',
  components: {
    'g-cascader': Cascader
  },
  props: {},
  data () {
    return {
      selected: [],
      cascaderDatas: [
      {
        name: '浙江',
        key: 'zhejiang',
        children: [
          {
            name: '杭州',
            key: 'hangzhou',
            children: [
              {
                name: '上城区',
                key: 'shangchengqu',
              },
              {
                name: '下城区',
                key: 'xiaChengqu',
              }
            ]
          },
          {
            name: '嘉兴',
            key: 'jiaxing',
          },
          {
            name: '湖州',
            key: 'huzhou',
          }
        ]
      },
      {
        name: '福建',
        key: 'fujian',
        children: [
          {
            name: '福州',
            key: 'fuzhou',
            children: [
              {
                name: '鼓楼',
                key: 'gulou',
              },
              {
                name: '台江',
                key: 'taijiang',
              }
            ]
          },
          {
            name: '莆田',
            key: 'putian',
          }
        ]
      }
    ]
    };
  },
  computed: {},
  created () {},
  methods: {}
}

</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    --font-size: 14px;
  }
  body {
    font-size: var(--font-size)
  }

</style>