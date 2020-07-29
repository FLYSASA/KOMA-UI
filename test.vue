.<template>
  
</template>

<script>
export default {
  methods: {
    importJs () {
      let src = 'sasa'
      return new Promise((resolve, reject) =>{
        const $script = document.createElement('script')
        $script.type = 'text/javascript'
        $script.addEventListener('load', resolve)
        $script.addEventListener('error', (e)=> {reject(e)})
        $script.src = src
        document.body.appendChild($script)
      })
    },
    jsConfig () {
      this.importJs().then(()=>{

      })
    }
  },
  created(){
    this.jsConfig()
  },
}
</script>

<style>

</style>