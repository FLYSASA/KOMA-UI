<template>
  <div class="base">
    <section>
      <h2>k-cascader Attributes</h2>
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
              <td>selected</td>
              <td class="des">已选中的值，可以用 .sync 修饰符修饰。</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>datas</td>
              <td class="des">数据源，可以用 .sync 修饰符修饰。</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>popoverHeight</td>
              <td class="des">设置面板高度。</td>
              <td class="type">String</td>
              <td>——</td>
              <td>200px</td>
            </tr>
            <tr>
              <td>loadData</td>
              <td class="des">懒加载回调函数。</td>
              <td class="type">Function</td>
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