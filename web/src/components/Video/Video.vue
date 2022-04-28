<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="top-box">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><a href="/" class="breadcrumb">Index</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/" class="breadcrumb">Type</a></el-breadcrumb-item>
          <el-breadcrumb-item><a class="breadcrumb">VideoName</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title-box">
        <div class="title">
          <p style="font-size: 35px;">VideoName</p>
          <p style="font-size: 15px">Date</p>
        </div>
        <div class="avatar">
          <el-avatar :size="50" :src="video.videoOwnerAvatar"></el-avatar>
          <p style="font-size: 15px;margin: 0;">Uploader</p></div>
      </div>
      <div class="video-box">
        <div class="video-play-box">
          <VideoPlayArea v-bind:title="video"></VideoPlayArea>
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
        videoId:"456",
        videoName:"AAA",
        videoOwnerName:"aaa",
        videoOwnerId:"01",
        videoOwnerAvatar:"A",
        videoUrl:"ASA"
      }
    }
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
