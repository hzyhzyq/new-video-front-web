<template>
<div>
  <My_Header v-bind:currentUser="currentUser"></My_Header>
  <div class="middle">
    <div class="main_left"></div>
    <div style="position:relative;width: 750px;height: auto; left: 0px;right:0px;margin:auto;padding-top: 30px;text-align: center;">
      <Upload v-if="currentUser.id != null"></Upload>
      <a href="/login" style="font-size: 50px; line-height: 600px;width: 100%" v-if="currentUser.id == null">Please Login First</a>
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
</style>
