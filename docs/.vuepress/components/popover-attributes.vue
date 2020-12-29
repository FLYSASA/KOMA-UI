<template>
  <div class="base">
    <section>
      <h2>k-popover Attributes</h2>
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
              <td>position</td>
              <td class="des">弹出位置</td>
              <td class="type">String</td>
              <td>top，bottom，left，right</td>
              <td>top</td>
            </tr>
            <tr>
              <td>trigger</td>
              <td class="des">触发方式</td>
              <td class="type">String</td>
              <td>click，hover</td>
              <td>click</td>
            </tr>
            <tr>
              <td>container</td>
              <td class="des">container的值应该是一个dom元素</td>
              <td class="type">Element</td>
              <td>——</td>
              <td>body</td>
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