<script lang="jsx">
export default {
  name: 'demo2',
  data(){
    return {
      n: 3,
      items: ['内容1','内容2','内容3','内容4']
    }
  },
  render(h){
    return (
      <div>
        { this.n > 3 ? <span>内容1</span> : <span>内容2</span>}
        <ul>
          {
            this.items.map(i=>
              <li class="content">{i}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
.content {
  color:red;
}
</style>