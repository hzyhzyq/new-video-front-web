<template>
  <div class="body">
    <div class="video-play-box">
      <div class="video" id="wrapper">
        <div class="danmaku-box" style="top:0">
          <p>{{bulletChattingList[bulletChattingIndex].content}}</p>
          <p v-for="value in bulletChattingList[bulletChattingIndex].replay">>>{{value.userName}}:&nbsp{{value.content}}</p>
        </div>
      </div>
    </div>
    <div class="controller">
      <div style="position:absolute;width: 15%;height:100%;left: 5%;padding-top: 10px">
        <p class="demonstration">弹幕</p>
        <el-switch style="top:8px" v-model="value"></el-switch>
      </div>
      <div style="position:relative;width: 60%;height:100%;left: 20%;padding-top: 7px">
        <div class="block">
          <span class="demonstration">弹幕不透明度</span>
          <el-slider class="slider" v-model="slider" :step="10" show-stops></el-slider>
        </div>
      </div>
    </div>
    <div class="comment-box">
      <div style="float: left;width: auto;margin-left: 3%;height: 100%;padding-top:5px">
        <el-button type="primary" round size="small">发送弹幕</el-button>
      </div>
      <div style="float: right;width: 75%;margin-right: 5%;">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="like-box">
      <el-button-group>
        <el-button type="danger" icon="el-icon-share" round></el-button>
        <el-button type="warning" icon="el-icon-star-off" round></el-button>
        <el-button type="primary" icon="el-icon-bell" round>subscribe</el-button>
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
import Chimee from 'chimee';
import hls from 'chimee-kernel-hls';

export default {
  name: "VideoPlayArea",
  data() {
    return {
      player: {},
      bulletChattingList: [{
        progress: "0",
        userId: "",
        userName: "",
        content: "",
        replay: [{
          userName: "",
          userId: "",
          content: ""
        }]
      }],
      bulletChattingIndex: 0,
      mainIntervalId: 0,
      commentBox: [false, true, true, false],
      value: true,
      input: '',
      slider: 50,


    }
  },
  created() {
    this.$http.get("http://rap2api.taobao.org/app/mock/301574/video/bullet-chatting").then((res) => {
      console.log(res.data);
      this.bulletChattingList = res.data.bulletChattingList;
    });
  },
  mounted: function () {
    this.xc();
    this.player = this.getPlayer();
    this.player.addEventListener('playing', this.loopExecution);
    this.player.addEventListener('pause', this.closeLoopExecution());
  },
  methods: {
    xc() {
      new Chimee({
        wrapper: document.getElementById("wrapper"),
        src: 'http://192.168.211.129/vod/example.mp4/index.m3u8',
        controls: true,
        isLive: false,
        autoplay: false,
        kernels: {
          hls
        }
      });
    },
    getPlayer() {
      return document.getElementsByTagName("video")[0];
    },
    loopExecution() {
      this.mainIntervalId = setInterval(this.checkNextBulletChattingList, 1000);
    },
    checkNextBulletChattingList() {
      let currentTime = this.getCurrentPlaybackProgress();
      let progress = -1;
      if (this.bulletChattingList[this.bulletChattingIndex] != null) {
        progress = this.bulletChattingList[this.bulletChattingIndex].progress;
      }

      console.log(currentTime + 'ts' + this.mainIntervalId);
      console.log(progress);
      while (0 <= progress && currentTime >= progress) {
        //如果超时超过3秒，移除顶部
        if (currentTime - progress > 3) {
          this.bulletChattingIndex++;
          progress = this.bulletChattingList[this.bulletChattingIndex].progress;
          continue;
        }
        //查找是否有空的box用于显示
        let i = 0;
        while (this.commentBox[i] == false) {
          if (i == 4) {
            break;
          }
          i++;
        }
        //存在空的box,显示
        if (i != 4) {
          this.commentBox[i] = false;
          this.bulletChattingIndex++;
          progress = this.bulletChattingList[this.bulletChattingIndex].progress;
          //显示box
          //设定持续时间
          console.log("ok" + i);
        }
      }
    },
    getCurrentPlaybackProgress() {
      let currentTime = this.player.currentTime.toFixed(0);
      return currentTime;
    },
    closeLoopExecution() {
      clearInterval(this.mainIntervalId);
    }
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
p{
  width: 100%;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow:hidden;
}
.video-play-box {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  border-radius: 5px;
}

.video {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #545c64;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-left: 1px solid #EBEEF5;
  border-right: 1px solid #EBEEF5;
}

.danmaku-box {
  position: absolute;
  width: 20%;
  height: auto;
  padding: 2% 3%;
  background: black;
  opacity: 0.5;
  text-align: left;
  color: #EBEEF5;
  font-size: 18px;
}

.comment > ul {
  padding: 0;
  list-style: none;
  text-align: left;
}

.comment > ul > li {
  list-style: none;
  margin-left: 5%;
  margin-right: 5%;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: aliceblue;
}

.over {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;
}

.big {
  position: absolute;
  margin-left: 10%;
  margin-top: 3%;
  width: 80%;
  height: 80%;
  background: white;
  z-index: 999;
  display: none;
}

.controller {
  position: relative;
  width: 100%;
  height: auto;
  border-left: 1px solid #EBEEF5;
  border-right: 1px solid #EBEEF5;
}

.block {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

.demonstration {
  font-size: 14px;
  color: black;
  line-height: 14px;
}

.slider {
  width: 80%;
  display: block;
}

.comment-box {
  position: relative;
  width: 100%;
  height: auto;
  display: inline-block;
  border-left: 1px solid #EBEEF5;
  border-right: 1px solid #EBEEF5;
}

.like-box {
  position: relative;
  width: 97.5%;
  padding-top: 2%;
  padding-left: 2.5%;
  padding-bottom: 2.5%;
  height: auto;
  border-left: 1px solid #EBEEF5;
  border-right: 1px solid #EBEEF5;
}

.introduction-box {
  position: relative;
  padding: 1% 5% 2%;
  width: 90%;
  height: auto;
  background-color: white;
  border-left: 1px solid #EBEEF5;
  border-right: 1px solid #EBEEF5;
  border-bottom: 1px solid #EBEEF5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
