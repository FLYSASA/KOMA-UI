<template>
  <div class="base">
    <section>
      <h2>$toast Options</h2>
      <p class="des">
        不同于其它组件，toast是以插件的形式挂载到vue上的。我们可以传入一个option对象，来展示不同提示框。
        调用方式：<span class="code">this.$toast(MESSAGE, OPTIONS)。</span>
      </p>
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
              <td>autoClose</td>
              <td class="des">自动关闭</td>
              <td class="type">Boolean，Number</td>
              <td>——</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>position</td>
              <td class="des">弹出位置</td>
              <td class="type">String</td>
              <td>top，bottom，middle</td>
              <td>top</td>
            </tr>
            <tr>
              <td>closeButton</td>
              <td class="des">接受一个text字段和callback回调</td>
              <td class="type">Object</td>
              <td>——</td>
              <td>{test: '关闭', callback: undefined}</td>
            </tr>
            <tr>
              <td>enableHtml</td>
              <td class="des">是否支持插入html（为避免xss攻击，谨慎使用）</td>
              <td class="type">Boolean</td>
              <td>true，false</td>
              <td>false</td>
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