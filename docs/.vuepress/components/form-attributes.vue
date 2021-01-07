<template>
  <div class="base">
    <section>
      <h2>k-form Attributes</h2>
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
              <td>model</td>
              <td class="des">表单数据对象</td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>rules</td>
              <td class="des">表单验证规则</td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>k-form-item Attributes</h2>
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
              <td>label</td>
              <td class="des">表单项的标题，必填</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>prop</td>
              <td class="des">表单项的唯一标识，必填，用于表单验证</td>
              <td class="type">string</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>k-form Events</h2>
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
              <td>validate</td>
              <td class="des">任一表单项被校验后触发，也可以主动触发</td>
              <td class="type">function(valid, error) <br>校验是否通过，错误消息（如果存在）</td>
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