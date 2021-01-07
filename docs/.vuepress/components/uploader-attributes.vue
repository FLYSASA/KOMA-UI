<template>
  <div class="base">
    <section>
      <h2>k-upload Attributes</h2>
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
              <td class="des">上传的文件字段名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>file</td>
            </tr>
            <tr>
              <td>action</td>
              <td class="des">必选参数，上传的地址</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>method</td>
              <td class="des">上传的请求方法</td>
              <td class="type">String</td>
              <td>GET, POST, PUT</td>
              <td>POST</td>
            </tr>
            <tr>
              <td>fileList</td>
              <td class="des">上传的文件列表</td>
              <td class="type">Array</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>sizeLimit</td>
              <td class="des">文件大小限制</td>
              <td class="type">Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>accept</td>
              <td class="des">接受的上传文件类型</td>
              <td class="type">String</td>
              <td>——</td>
              <td>*</td>
            </tr>
            <tr>
              <td>parseResponse</td>
              <td class="des">必选参数，文件上传后的成功回调，需要回传一个文件预览的url。</td>
              <td class="type">Function</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>k-upload Events</h2>
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
              <td>error</td>
              <td class="des" style="width: 100%;">文件上传失败时的钩子</td>
              <td class="type">function(error)</td>
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