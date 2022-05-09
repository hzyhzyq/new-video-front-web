<template>
  <div class="body" style="display: block">
    <div class="video-play-box">
      <div class="video" id="wrapper">
        <div id="chartingBox" style="display: block">
          <div id="danmakuReplyBox"
               style="position: absolute;width: 100%;height: 100%;z-index: 9999;background-color: whitesmoke;display: none">
            <DanmakuReply ref="danmakuReply"></DanmakuReply>
            <div style="position: absolute;width:5%;height: 0;padding-bottom:5%;top: 3%;right: 2%;">
              <el-button v-on:click="closeCommentDetail()" type="danger" icon="el-icon-close" circle
                         style="position:absolute;width:100%;height: 100%;padding: 0"></el-button>
            </div>
          </div>
          <div v-if="bulletChattingList[commentBoxIndex[0]] != null" v-on:click="showCommentDetail(0)" class="danmaku-box" id="danmaku-box-0" style="top:5%;left: 10%;">
            <p style="display: none"><{{ bulletChattingIndex }}/p>
            <p>{{ bulletChattingList[commentBoxIndex[0]].userName }}:&nbsp{{ bulletChattingList[commentBoxIndex[0]].content }}</p>
            <p v-for="value in bulletChattingList[commentBoxIndex[0]].reply">>>{{ value.userName }}:&nbsp{{value.replyContent }}</p>
            <p id = "reply-0" style="color: red;margin: 0;"></p>
          </div>
          <div v-if="bulletChattingList[commentBoxIndex[1]] != null" v-on:click="showCommentDetail(1)" class="danmaku-box" id="danmaku-box-1" style="top:5%;right: 10%">
            <p>{{ bulletChattingList[commentBoxIndex[1]].userName }}:&nbsp{{ bulletChattingList[commentBoxIndex[1]].content }}</p>
            <p v-for="value in bulletChattingList[commentBoxIndex[1]].reply">>>{{ value.userName }}:&nbsp{{value.replyContent }}</p>
            <p id = "reply-1" style="color: red;margin: 0;"></p>
          </div>
          <div v-if="bulletChattingList[commentBoxIndex[2]] != null" v-on:click="showCommentDetail(2)" class="danmaku-box" id="danmaku-box-2" style="top:50%;left: 10%">
            <p>{{ bulletChattingList[commentBoxIndex[2]].userName }}:&nbsp{{ bulletChattingList[commentBoxIndex[2]].content }}</p>
            <p v-for="value in bulletChattingList[commentBoxIndex[2]].reply">>>{{ value.userName }}:&nbsp{{value.replyContent }}</p>
            <p id = "reply-2" style="color: red;margin: 0;"></p>
          </div>
          <div v-if="bulletChattingList[commentBoxIndex[3]] != null" v-on:click="showCommentDetail(3)" class="danmaku-box" id="danmaku-box-3" style="top:50%;right: 10%">
            <p>{{ bulletChattingList[commentBoxIndex[3]].userName }}:&nbsp{{ bulletChattingList[commentBoxIndex[3]].content }}</p>
            <p v-for="value in bulletChattingList[commentBoxIndex[3]].reply">>>{{ value.userName }}:&nbsp{{value.replyContent }}</p>
            <p id = "reply-3" style="color: red;margin: 0;"></p>
          </div>
          <div v-on:click="showCommentDetail(4)" class="danmaku-box" id="danmaku-box-4" style="top:30%;left: 40%">
            <p id="current-user-comment" style="color: red;margin: 0;"></p>
            <p id = "reply-4" style="color: red;margin: 0;"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="controller">
      <div style="position:absolute;width: 15%;height:100%;left: 5%;padding-top: 10px">
        <p class="demonstration">Charting</p>
        <el-switch @change="closeCharting" style="top:8px" v-model="bulletChartingValue"></el-switch>
      </div>
      <div style="position:relative;width: 60%;height:100%;left: 20%;padding-top: 7px">
        <div class="block">
          <span class="demonstration">ChartingOpacity</span>
          <el-slider @input="changeOpacity" class="slider" v-model="slider" :min="10" :max="100" :step="10"
                     show-stops></el-slider>
        </div>
      </div>
    </div>
    <div class="comment-box" v-if="currentUser.id != null">
      <div style="float: left;width: auto;margin-left: 3%;height: 100%;padding-top:5px">
        <el-button v-on:click="sendComment()" type="primary" round size="small">发送弹幕</el-button>
      </div>
      <div style="float: right;width: 75%;margin-right: 5%;">
        <el-input v-model="input" placeholder="请输入内容" @click.native="pauseVideo()"></el-input>
      </div>
    </div>
    <div class="like-box" v-if="currentUser.id != null">
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
      <p>{{ video.videoDescribe }}</p>
    </div>
  </div>
</template>

<script>
import Chimee from 'chimee';
import hls from 'chimee-kernel-hls';
import DanmakuReply from './DanmakuReply'

export default {
  name: "VideoPlayArea",
  props: {video: {}, bulletChattingList: [], player: {}, currentUser: {}},
  //
  data() {
    return {
      //当前弹幕列表的位置
      bulletChattingIndex: 0,
      //主计时器
      mainIntervalId: 0,
      //弹幕框是否可以用于显示
      commentBox: [true, true, true, true, true],
      //每个弹幕框显示的弹幕列表中的哪个
      commentBoxIndex: [0, 0, 0, 0],
      //每个框的5秒倒计时id
      commentBoxTimeout: [-1, -1, -1, -1, -1],
      //新发送的弹幕的id
      newCommentId: "",
      //正在发送回复的评论
      inReply:-1,
      //
      bulletChartingValue: true,
      input: '',
      slider: 50,
    }
  },
  methods: {
    xc(videoUrl) {
      new Chimee({
        wrapper: document.getElementById("wrapper"),
        src: videoUrl,
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
    //播放,重启计时器，每隔一秒检测是否打印弹幕
    loopExecution() {
      //开始播放，重启计时器
      for (let i = 0; i < 5; i++) {
        if (this.commentBoxTimeout[i] == -2) {
          this.autoCloseBulletChattingBox(i)
        }
      }
      //监测是否打印
      this.mainIntervalId = setInterval(this.checkNextBulletChattingList, 1000);
    },
    checkNextBulletChattingList() {
      let currentTime = this.getCurrentPlaybackProgress();
      let progress = this.getBulletChattingProgress();
      while (0 <= progress && currentTime >= progress) {
        //如果超时超过3秒，移除顶部
        if (currentTime - progress > 3) {
          this.bulletChattingIndex++;
          progress = this.getBulletChattingProgress();
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
          this.commentBoxIndex[i] = this.bulletChattingIndex;
          this.bulletChattingIndex++;
          progress = this.getBulletChattingProgress();
          //显示box
          this.showBulletChattingBox(i);
          //设定持续时间
          this.autoCloseBulletChattingBox(i);
        } else {
          break;
        }
      }
    },
    //暂停时关闭检查,停止计时器
    closeLoopExecution() {
      clearInterval(this.mainIntervalId);
      for (let i = 0; i < 5; i++) {
        console.log(i+"停止计时器"+this.commentBoxTimeout[i])
        if (this.commentBoxTimeout[i] >= 0) {
          clearTimeout(this.commentBoxTimeout[i]);
          this.commentBoxTimeout[i] = -2;
        }
      }
    },
    //重新定位后重设BulletChattingIndex，关闭所有已经显示的弹幕
    resetBulletChattingIndex() {
      this.closeAll();
      let current = this.getCurrentPlaybackProgress();
      let left = 0;
      let right = this.bulletChattingList.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.bulletChattingList[mid].progress - current >= 0) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      if (right == -1) {
        right = 0;
      }
      this.bulletChattingIndex = right;
    },
    //显示评论详细信息:暂停视频，获取点击的box的id,发送获取详细信息请求,开启大框
    showCommentDetail: function (index) {
      console.log(this.currentUser)
      if(this.currentUser.id == null){
        console.log("未登录");
        return;
      }
      this.player.pause();
      this.inReply = index;
      if (index == 4) {
        this.$refs.danmakuReply.getData(this.newCommentId, 1);
      } else {
        let bulletChattingListIndex = this.commentBoxIndex[index];
        let commentIndex = this.bulletChattingList[bulletChattingListIndex].commentId;
        this.$refs.danmakuReply.getData(commentIndex, 1);
      }
      document.getElementById("danmakuReplyBox").style.display = "block";
    },
    closeCommentDetail: function () {
      document.getElementById("danmakuReplyBox").style.display = "none";
      this.inReply = -1;
      this.player.play();
    },
    //工具方法
    //获取当前播放进度
    getCurrentPlaybackProgress() {
      let currentTime = this.player.currentTime.toFixed(0);
      return currentTime;
    },
    //获取当前bulletChattingIndex下的bulletChattingList的progress，不存在为-1
    getBulletChattingProgress() {
      let progress = -1;
      if (this.bulletChattingList[this.bulletChattingIndex] != null) {
        progress = this.bulletChattingList[this.bulletChattingIndex].progress;
      } else {
        return progress = -1;
      }
      return progress - 0;
    },
    //显示某个danmaku-box
    showBulletChattingBox(index) {
      let elementId = "danmaku-box-";
      let element = document.getElementById(elementId + index);
      element.style.display = "block";
      this.commentBox[index] = false;
    },
    //5秒后关闭danmaku-box
    autoCloseBulletChattingBox(index) {
      console.log("自动关闭"+index)
      let elementId = "danmaku-box-";
      let element = document.getElementById(elementId + index);
      let reply = document.getElementById("reply-" + index);
      let commentBox = this.commentBox;
      let timeout = this.commentBoxTimeout
      let key = setTimeout(function () {
        element.style.display = "none";
        reply.innerHTML="";
        commentBox[index] = true;
        timeout[index] = -1;
      }, 5000);
      timeout[index] = key;
    },
    //关闭所有已经显示的danmaku-box
    closeAll() {
      for (let i = 0; i < 5; i++) {
        let elementId = "danmaku-box-";
        let element = document.getElementById(elementId + i);
        let reply = document.getElementById("reply-" + i);
        if(element != null){
          element.style.display = "none";
        }
        if(reply != null){
          reply.innerHTML="";
        }
        this.commentBox[i] = true;
        this.commentBoxIndex[i] = 0;
        this.commentBoxTimeout[i] = -1;
      }
    },
    changeOpacity(val) {
      let boxes = document.getElementsByClassName("danmaku-box");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.opacity = val + "%";
      }
    },
    closeCharting(val) {
      if (val) {
        document.getElementById("chartingBox").style.display = "block";
      } else {
        document.getElementById("chartingBox").style.display = "none";
      }
    },
    //！！！
    sendComment() {
      //发送一条弹幕
      if (this.input == '') {
        this.openFail("write your comment");
        return;
      }
      if (this.currentUser != null) {
        //使用post
        this.$http.post("http://localhost:8081/comment/send_comment", {}, {
          params: {
            videoId: this.video.id,
            commentContent: this.input,
            progress: this.getCurrentPlaybackProgress(),
            inBox: 1
          }
        })
          .then((res) => {
            if (res.data == null || res.data.code != 200) {
              this.openFail("send fail");
            } else {
              this.newCommentId = res.data.data;
              this.openSuccess("send success");
            }
          });
        document.getElementById("danmaku-box-4").style.display = "block";
        document.getElementById("current-user-comment").innerHTML = "You:&nbsp"+this.input;
        document.getElementById("reply-4").innerHTML = "";
        this.autoCloseBulletChattingBox(4);
        this.input = "";
        this.playVideo();
      }
    },
    sendReply(reply){
      console.log(reply)
      document.getElementById("reply-"+this.inReply).innerHTML = ">>You:&nbsp"+reply;
    },
    openFail(text) {
      this.$message.error(text);
    },
    openSuccess(text) {
      this.$message({
        message: text,
        type: 'success'
      });
    },
    pauseVideo() {
      this.player.pause();
    },
    playVideo() {
      this.player.play();
    }

  },
  components: {
    DanmakuReply
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

p {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
  width: auto;
  max-width: 20%;
  height: auto;
  padding: 2% 3%;
  background: black;
  opacity: 50%;
  text-align: left;
  color: #EBEEF5;
  font-size: 15px;
  z-index: 999;
  border-radius: 5px;
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
  font-size: 12px;
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
