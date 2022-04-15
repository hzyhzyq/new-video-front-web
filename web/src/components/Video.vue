<template>
  <div>
    <Header></Header>
    <div class="main">
      <div><el-breadcrumb separator="/">
        <el-breadcrumb-item><a href="/" class="breadcrumb">Index</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/" class="breadcrumb">Type</a></el-breadcrumb-item>
        <el-breadcrumb-item><a class="breadcrumb">VideoName</a></el-breadcrumb-item>
      </el-breadcrumb></div>
      <div class="title-box">
        <p style="font-size: 35px;">VideonName</p>
        <p style="font-size: 15px">Date</p>
        <div class="avatar"><el-avatar :size="50" :src="circleUrl" ></el-avatar><p style="font-size: 15px;margin: 0;">Creater</p></div>
      </div>
      <div class="video-box">
      </div>
      <div class="recommend-video-box"></div>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./My_Header";
import Footer from "./My_Footer";

export default {
  name: "Video",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
p{
  margin: 15px 0 0 0;
}
.main {
  position: relative;
  width: 90%;
  height: auto;
  padding: 3% 5% 3% 5%;
}
.breadcrumb {
  font-size: 15px;
}
.title-box{
  width: 100%;
  height: auto;
  margin: 5% 0 0 0;
}
.avatar{
  position: relative;
  float: right;
  width: 20%;
  text-align: center;
  top:-80px;
}
.video-box{
  width: 75%;
  height: 0;
  padding-bottom: 40%;
  background-color: black;
  margin-top: 20px;
}
.recommend-video-box{
  width: 20%;
  left: 80%;
  height: 500px;
  background-color: black;
  margin-top: 20px;
}
</style>
