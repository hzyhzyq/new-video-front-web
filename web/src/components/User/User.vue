<template>
<div>
  <My_Header v-bind:currentUser="currentUser"></My_Header>
  <div class="middle">
    <div class="main_left">
      <el-avatar class="avatar" :size="80" :src="circleUrl"></el-avatar>
      <div class="username">User Name</div>
      <div class="upload">upload</div>
      <div class="upload" style="top:55%">other functions</div>
      <div class="upload" style="top:65%">...</div>
      <div class="exit" >exit</div>
    </div>
    <div style="position:relative;width: 750px;height: auto; left: 0px;right:0px;margin:auto;padding-top: 30px;text-align: center;">
      <Upload v-if="currentUser.id != null"></Upload>
      <a href="/login" style="font-size: 50px; line-height: 600px;width: 100%; color: #303133" v-if="currentUser.id == null">Please Login First</a>
    </div>
  </div>
  <MY_Footer></MY_Footer>
</div>
</template>

<script>
import MY_Footer from "../My_Footer";
import Upload from "./Upload";
import My_Header from "../My_Header";

export default {
  name: "User",
  data() {
    return {
      currentUser:{},
      videos: [],
    }
  },
  components: {
    MY_Footer,
    Upload,
    My_Header
  },
  mounted: function () {
    this.$http.get("http://localhost:8081/user/get_user_info",{withCredentials: true,}).then((res) => {
      if(res.data.code == 200){
        this.currentUser = res.data.data;
      }
    });
  },
}
</script>

<style scoped>

a {
  text-decoration: none;
}

.middle{
  position: relative;
  width: 100%;
  min-width: 1200px;
  height: 650px;
  margin-top: 50px;
  background: #d3dce6;
}
.main_left{
  position: absolute;
  left: 0px;
  width: 350px;
  height: 100%;
  background: #545c64;
}
.avatar{
  position: absolute;
  left: 0;
  right: 0;
  top:15%;
  margin: auto;
}
.username{
  position: absolute;
  left: 0;
  right: 0;
  top:30%;
  margin: auto;
  text-align: center;
  font-size: 20px;
  color: #ebeef5;
}
.upload{
  position: absolute;
  height: 50px;
  width: 80%;
  left: 0;
  right: 0;
  top:45%;
  margin: auto;
  text-align: center;
  font-size: 15px;
  line-height: 50px;
  color: #ebeef5;
  background-color: rgba(126,130,138,1);
  border-radius: 5px;
}
.upload:hover{
  background-color: rgba(163,168,176,1);
}
.exit{
  position: absolute;
  height: 50px;
  width: 80%;
  left: 0;
  right: 0;
  top:85%;
  margin: auto;
  text-align: center;
  font-size: 15px;
  line-height: 50px;
  color: #ebeef5;
  background-color: rgba(166,27,0,1);
  border-radius: 5px;
}
.exit:hover{
  background-color: rgba(195,27,0,1);
}
</style>
