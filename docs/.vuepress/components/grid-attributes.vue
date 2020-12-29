<template>
  <div class="base">
    <section>
      <h2>k-row Attributes</h2>
      <!-- <p class="des">
        组件将被渲染为
        <span class="code">button</span>标签，因此你可以使用所有的
        <span class="code">button</span>原生属性。
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
              <td>gutter</td>
              <td class="des">栅格间隔</td>
              <td class="type">String，Number</td>
              <td>——</td>
              <td>0</td>
            </tr>
            <tr>
              <td>align</td>
              <td class="des">flex布局的对齐方式</td>
              <td class="type">String</td>
              <td>——</td>
              <td>left，right，center</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>k-col Attributes</h2>
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
              <td>span</td>
              <td class="des">栅格占据的格数</td>
              <td class="type">String，Number</td>
              <td>——</td>
              <td>0</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">栅格左侧的间隔格数</td>
              <td class="type">String，Number</td>
              <td>——</td>
              <td>0</td>
            </tr>
            <tr>
              <td>默认尺寸</td>
              <td class="des"> <576px 响应式栅格属性对象 </td>
              <td class="type">——</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>ipad</td>
              <td class="des"> ≥576px 响应式栅格属性对象 </td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>narrowPc</td>
              <td class="des"> ≥768px 响应式栅格属性对象 </td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>pc</td>
              <td class="des"> ≥992px 响应式栅格属性对象 </td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>widePc</td>
              <td class="des"> ≥1200px 响应式栅格属性对象 </td>
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
.code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}
</style>