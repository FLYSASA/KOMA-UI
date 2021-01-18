<template>
  <div class="base">
    <section>
      <h2>k-table Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dataSource</td>
              <td class="des">数据源</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>numberVisible</td>
              <td class="des">显示序号</td>
              <td class="type">Boolean</td>
              <td>false，true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>border</td>
              <td class="des">显示边框</td>
              <td class="type">Boolean</td>
              <td>false，true</td>
              <td>true</td>
            </tr>
            <tr>
              <td>compact</td>
              <td class="des">是否紧凑型</td>
              <td class="type">Boolean</td>
              <td>false，true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>striped</td>
              <td class="des">是否显示斑马纹</td>
              <td class="type">Boolean</td>
              <td>false，true</td>
              <td>true</td>
            </tr>
            <tr>
              <td>checkable</td>
              <td class="des">是否显示勾选框</td>
              <td class="type">Boolean</td>
              <td>false，true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>selectedItems</td>
              <td class="des">勾选的项</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>orderBy</td>
              <td class="des">排序规则</td>
              <td class="type">Object</td>
              <td>可以传入需要排序的prop, 
              <br/>
              对应的值有 asc 和 desc</td>
              <td>——</td>
            </tr>
            <tr>
              <td>loading</td>
              <td class="des">是否显示加载中</td>
              <td class="type">Boolean</td>
              <td>false，true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>height</td>
              <td class="des">表格高度</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>expandKey</td>
              <td class="des">展开项</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>k-table-column Attributes</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>text</td>
              <td class="des">列名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>prop</td>
              <td class="des">列对应的prop</td>
              <td class="type">string</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>width</td>
              <td class="des">列宽</td>
              <td class="type">string</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}
</style>