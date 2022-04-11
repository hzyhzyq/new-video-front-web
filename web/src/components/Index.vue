<template>
  <div>
    <Header></Header>
    <p>INDEX</p>
    <el-button type="primary">主按钮</el-button>
    <a href="#/video">video</a>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
export default {
  name: "Index",
  data(){
    return{
      videos:[
        {id:"1",name:{abab}},
        {id:"2",name:{cccc}},
        {id:"3",name:{dddd}},
      ]
    }
  },
  methods:{

  },
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
