<template>
  <div class="wrapper cascader-demo">
    <demos-component
      name="基础用法"
      demokey="0"
      description="最简单的用法。"
      :codeStr="codeStr1">
      <template v-slot:code>
        <k-cascader 
          :selected.sync="selected"  
          :datas="datas">
        </k-cascader>
      </template>
    </demos-component>

    <demos-component
      name="懒加载"
      demokey="1"
      description="支持懒加载去加载面板内容。"
      :codeStr="codeStr2"
      codedes="需要传一个loadData回调函数来完成数据的懒加载。">
      <template v-slot:code>
        <k-cascader 
          :selected.sync="selected2"
          :datas.sync="lazyDatas"
          :load-data="loadData">
        </k-cascader>
      </template>
    </demos-component>
  </div>
</template>

<script>
import db from '../../../src/components/defs/db';
import Cascader from '../../../src/components/cascader/cascader';
import demosComponent from './demos-component.vue';

// promise获取数据
function ajax (id = 0, success, fail) {
  return new Promise((success, fail) => {
    let result = db.filter(i => i.parent_id === id)
    // 给数据加个 isLeaf 属性，当为true时则不需要再去请求数据
    result.forEach(node => {
      if(db.filter(i => i.parent_id === node.id).length > 0) {
        node.isLeaf = false
      } else {
        node.isLeaf = true
      }
      success(result)
    })
  })
}

export default {
  name: 'KomaButton',
  components: {
    demosComponent,
    'k-cascader': Cascader,
  },
  props: {},
  data () {
    return {
      codeStr1: 
      `
        <k-cascader 
          :selected.sync="selected"  
          :datas="datas">
        </k-cascader>
        
        data() {
          return {
            selected: [],
            datas: [
              {
                name: "湖南",
                children: [
                  {name: "长沙",
                    children: [{ name: "岳麓区" }, { name: "芙蓉区" }, { name: "天心区" }]
                  },
                  {
                    name: "常德",
                    children: [{ name: "石门县" }, { name: "临澧县" }, { name: "武陵区" }]
                  }
                ]
              },
              {
                name: "福建",
                children: [
                  {
                    name: "福州",
                    children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
                  }
                ]
              },
              {
                name: "安徽",
                children: [
                  {
                    name: "合肥",
                    children: [{ name: "瑶海" }, { name: "庐阳" }]
                  }
                ]
              }
            ],
          }
        }
      `,
      codeStr2: 
      `
        <k-cascader 
          :selected.sync="selected2"
          :datas.sync="lazyDatas"
          :load-data="loadData">
        </k-cascader>

        data(){
          return {
            selected2: [],
            lazyDatas: [],
          }
        },
        created() {
          ajax(0).then(res => {
            this.lazyDatas = res
          })
        },
        methods: {
          loadData({id}, callback) {
            ajax(id).then(res => {
              setTimeout(() => {
                callback(res)
              }, 2000)
            })
          }
        }
      `,
      datas: [
        {
          name: "湖南",
          children: [
            {name: "长沙",
              children: [{ name: "岳麓区" }, { name: "芙蓉区" }, { name: "天心区" }]
            },
            {
              name: "常德",
              children: [{ name: "石门县" }, { name: "临澧县" }, { name: "武陵区" }]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [{ name: "瑶海" }, { name: "庐阳" }]
            }
          ]
        }
      ],
      lazyDatas: [],
      selected: [],
      selected2: [],
    };
  },
  created() {
    ajax(0).then(res => {
      this.lazyDatas = res
    })
  },
  methods: {
    loadData({id}, callback) {
      ajax(id).then(res => {
        setTimeout(() => {
          callback(res)
        }, 2000)
      })
    }
  }
}

</script>

<style lang="less" scoped>
* {
    box-sizing: border-box;
  }
  .carousel-demo {
    .demo-content {
      width: 100%;
      height: 300px;
      background:#00abd5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
    }
  }
</style>