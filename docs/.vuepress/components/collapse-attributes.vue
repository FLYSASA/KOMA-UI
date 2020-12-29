<template>
  <div class="base">
    <section>
      <h2>k-collapse Attributes</h2>
      <!-- <p class="des">
        不同于其它组件，toast是以插件的形式挂载到vue上的。我们可以传入一个option对象，来展示不同提示框。
        调用方式：<span class="code">this.$toast(MESSAGE, OPTIONS)。</span>
      </p> -->
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
              <td class="des">当前展开折叠项的 name 组成的数组。可以用 .sync 修饰符修饰。</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>single</td>
              <td class="des">是否允许同时展开多个折叠项。</td>
              <td class="type">Boolean</td>
              <td>true, false</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2>k-collapse-item Attributes</h2>
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
              <td>name</td>
              <td class="des">唯一标识符，必填。</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>title</td>
              <td class="des">标题</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2>k-collapse Events</h2>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>事件名称</th>
              <th class="des">说明</th>
              <th class="type">回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>change</td>
              <td class="des">当前激活面板改变时触发，参数为选择项的name组成的数组。</td>
              <td class="type">(activeNames: array)</td>
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