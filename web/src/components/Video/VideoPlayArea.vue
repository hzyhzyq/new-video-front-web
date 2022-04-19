<template>
  <div class="body">
    <div class="video-play-box"></div>
    <div class="controller">
      <div style="position:absolute;width: 15%;height:100%;left: 5%;padding-top: 10px">
        <p class="demonstration">弹幕</p>
        <el-switch
          style="top:8px"
          v-model="value">
        </el-switch>
      </div>
      <div style="position:relative;width: 60%;height:100%;left: 20%;padding-top: 7px">
        <Slider></Slider>
      </div>
    </div>
    <div class="comment-box">
      <div style="float: left;width: auto;margin-left: 3%;height: 100%;padding-top:5px">
        <el-button type="primary" round size="small">发送弹幕</el-button>
      </div>
      <div style="float: left;left:15%;width: 70%;margin-left: 5%;display: inline-block">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="like-box">
      <el-button-group>
        <el-button type="danger" icon="el-icon-share" round></el-button>
        <el-button type="warning" icon="el-icon-star-off" round></el-button>
        <el-button type="primary" icon="el-icon-bell" round >subscribe</el-button>
      </el-button-group>
      <div style="float: right;margin-right: 5%">
        <el-button type="success" icon="el-icon-download" round></el-button>
      </div>
    </div>
    <div class="introduction-box">
      <h3>Describe</h3>
      <br>
      <p>This is the video's describe</p>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";


export default {
  name: "VideoPlayArea",
  data() {
    return {
      value: true,
      input: ''
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.body {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-play-box {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: #545c64;
  border-radius: 5px;
}

.controller {
  position: relative;
  width: 100%;
  height: auto;
}

.demonstration {

  font-size: 14px;
  color: black;
  line-height: 14px;
}

.comment-box {
  position: relative;
  width: 100%;
  height: auto;
  display: inline-block;
}

.like-box {
  position: relative;
  width: 100%;
  padding-top: 2%;
  padding-left: 2.5%;
  padding-bottom: 2.5%;
  height: auto;
}

.introduction-box {
  position: relative;
  padding: 1% 5% 2%;
  width: 90%;
  height: auto;
  background-color: white;
  border-bottom: 1px solid #EBEEF5;
  border-top: 1px solid #EBEEF5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
