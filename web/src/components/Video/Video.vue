<template>
  <div>
    <Header v-bind:currentUser="currentUser"></Header>
    <div class="main">
      <div class="top-box">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><a href="/" class="breadcrumb">Index</a></el-breadcrumb-item>
          <el-breadcrumb-item><a :href="'/'+this.video.videoType" class="breadcrumb">{{this.$route.query.type}}</a></el-breadcrumb-item>
          <el-breadcrumb-item><a class="breadcrumb">{{video.videoName}}</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title-box">
        <div class="title">
          <p style="font-size: 35px;">{{video.videoName}}</p>
          <p style="font-size: 15px">{{video.createTime}}</p>
        </div>
        <div class="avatar">
          <el-avatar :size="50" :src="video.videoOwnerAvatar"></el-avatar>
          <p style="font-size: 15px;margin: 0;">{{video.videoOwnerName}}</p></div>
      </div>
      <div class="video-box">
        <div class="video-play-box">
          <VideoPlayArea ref="videoPlayArea" v-bind:currentUser="currentUser" v-bind:video="video" v-bind:player="player" v-bind:bulletChattingList="bulletChattingList"></VideoPlayArea>
        </div>
        <div class="recommend-video-box">
          <RecommendVideoList></RecommendVideoList>
        </div>
      </div>
    </div>
    <div class="comment-box">
      <CommentArea></CommentArea>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../My_Header";
import Footer from "../My_Footer";
import RecommendVideoList from "./RecommendVideoList";
import VideoPlayArea from "./VideoPlayArea";
import CommentArea from "./CommentArea";

export default {
  name: "Video",
  components: {
    Header,
    Footer,
    RecommendVideoList,
    VideoPlayArea,
    CommentArea
  },
  data() {
    return {
      video:{
        id:"",
        videoName:"",
        videoOwnerName:"",
        videoOwnerId:"",
        videoOwnerAvatar:"",
        videoType:"",
        videoDescribe:"",
        createTime:"",
        videoUrl:"",
        pictureUrl: ""
      },
      bulletChattingList: [{
        commentId: "0",
        progress: "-1",
        userName: "admin",
        content: "test",
        reply: [{
          userName: "admin",
          replyContent: "test"
        }]
      }],
      currentUser:{},
      player: {},
    }
  },
  mounted: function () {
    //获取视频信息
    this.$http.get("http://localhost:8081/video/get_video?videoId="+this.$route.query.id,{withCredentials: true,}).then((res) => {
      if(res.data.code == 200){
        this.video = res.data.data;
        //播放视频
        this.$refs.videoPlayArea.xc(this.video.videoUrl);
        this.player = this.$refs.videoPlayArea.getPlayer();
        //获取弹幕
        this.$http.get("http://localhost:8081/comment/get_comment?videoId="+this.$route.query.id,{withCredentials: true,}).then((res) => {
          if(res.data.code == 200){
            this.bulletChattingList = res.data.data.bulletChattingList;
            //打印弹幕
            this.player.addEventListener('playing', this.$refs.videoPlayArea.loopExecution);
            this.player.addEventListener('pause', this.$refs.videoPlayArea.closeLoopExecution);
            this.player.addEventListener('seeking', this.$refs.videoPlayArea.resetBulletChattingIndex)
          }
        });
        this.$http.get("http://localhost:8081/user/get_user_info",{withCredentials: true,}).then((res) => {
          if(res.data.code == 200){
            this.currentUser = res.data.data;
          }
        });
      }
      else {
        //跳转到404
      }
    });
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

p {
  margin: 15px 0 0 0;
}

.main {
  position: relative;
  width: 90%;
  height: auto;
  min-width: 850px;
  padding: 3% 5% 3% 5%;
}

.breadcrumb {
  font-size: 15px;
}

.title-box {
  position: relative;
  width: 100%;
  height: auto;
  margin: 2% 0 0 0;
}

.title {
  position: relative;
  width: 80%;
  text-align: left;
}

.avatar {
  position: absolute;
  top: 0;
  left: 75%;
  width: 25%;
  text-align: center;
}

.video-box {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-play-box {
  position: relative;
  top: 20px;
  width: 70%;
  height: 100%;
  border-radius: 5px;
}

.recommend-video-box {
  position: absolute;
  top: 0;
  left: 75%;
  width: 25%;
  height: auto;
  margin-top: 20px;
  display: inline-block;
}

.comment-box {
  position: relative;
  padding-left: 5%;
  width: 63%;
  height: 100%;
}
</style>
