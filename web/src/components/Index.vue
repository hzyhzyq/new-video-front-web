<template>
  <div>
    <My_Header v-bind:currentUser="currentUser"></My_Header>
    <div style="position: relative;width: 100%;height: 500px;margin-bottom: 80px;margin-top: 30px;">
      <div style="position: absolute;width: 1288px;height: 500px;left: 0px;right: 0px;margin: auto">
        <el-carousel indicator-position="inside"  type="card" :interval="4000" height="500px">
          <el-carousel-item v-for="item in videos" :key="item.id" v-on:click.native="toVideoDetail(item)">
            <el-image style="width: 100%;height: 100%;" :src=item.pictureUrl fit='cover'></el-image>
            <p>{{item.id}}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="main-box">
      <div class="box">
        <div class="title">News</div>
        <div class="icon">More</div>
      <VideoList v-bind:type="'news'"></VideoList>
      </div>
    </div>
    <div class="main-box">
      <div class="box">
        <div class="title">Games</div>
        <div class="icon">More</div>
        <VideoList v-bind:type="'games'"></VideoList>
      </div>
    </div>
    <div class="main-box">
      <div class="box">
        <div class="title">Movies</div>
        <div class="icon">More</div>
        <VideoList v-bind:type="'movies'"></VideoList>
      </div>
    </div>
    <MY_Footer></MY_Footer>
  </div>
</template>

<script>
import MY_Footer from "./My_Footer";
import My_Header from "./My_Header";
import VideoList from "./VideoList";

export default {
  name: "Index",
  data() {
    return {
      currentUser:{},
      videos: [],
    }
  },
  mounted: function () {
    this.$http.get("http://localhost:8081/user/get_user_info",{withCredentials: true,}).then((res) => {
      if(res.data.code == 200){
        this.currentUser = res.data.data;
      }
    });
    this.$http.get("http://localhost:8081/video/get_recommend_video", {withCredentials: true,}).then((res) => {
      if (res.data.code == 200) {
        this.videos = res.data.data;
      }
    });
  },
  methods: {
    toVideoDetail(data) {
      console.log(data);
      this.$router.push("/video?type=" + data.videoType + "&id=" + data.id)
    }
  },
  components: {
    My_Header,
    MY_Footer,
    VideoList
  }
}
</script>

<style scoped>
.main-box{
  position: relative;width: 100%;height: 750px;margin-bottom: 80px;
}
.box{
  position:absolute; left:0px; right:0px; margin:auto;min-width: 1288px;width:1288px;height: 100%;
}
.icon{
  position: absolute;right:0;top:20px;width:80px;height:38px;margin: 20px;border: #EBEEF5 1px solid;border-radius: 5px;text-align: center;line-height: 36px
}
.icon:hover{
  background:#f7f7f7;
}
.title{
  position: relative;top:20px;font-size: 30px;font-weight:bold; margin: 20px 20px 30px
}
/**/
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
