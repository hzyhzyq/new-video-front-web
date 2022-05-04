<template>
  <div style="position: absolute;width: 100%;height: 100%;background-color: whitesmoke">
    <div style="position:relative;width:91%;margin-top:3.5%;height: 25%;">
      <div
        style="position: absolute;width: 100%;height: 80%;top: 20%;background-color: #545c64;border-top-right-radius: 5px;border-bottom-right-radius: 5px;"></div>
      <div style="position: absolute;left: 5%;width: 15%;height: 100%;">
        <el-avatar style="width: 60%;height: 60%;margin-left: 20%" :src="commentData.userAvatar"></el-avatar>
        <div
          style="position: absolute;width:100%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
          <p style="font-size: 14px; color: whitesmoke">{{ commentData.userName }}</p>
        </div>
      </div>
      <div style="position: absolute;left: 25%;width:70%;height: 80%;top:20%;display: flex;align-items: center;">
        <p style="color: whitesmoke">{{ commentData.content }}</p>
      </div>
    </div>
    <div
      style="position: relative;width: 80%;height: 50%;margin-left:5%;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px">
      <ul
        style="width: 100%;height: 100%;background-color: #ebeef5;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px">
        <li style="position:relative;width: 100%;height: 25%;background-color: #ebeef5">
          <div v-if="replies[0] != null">
          <div style="position: absolute;left: 5%;width: 7%;height: 80%;top:10%">
            <el-avatar style="width: 60%;height: 60%;margin-left: 20%"
                       :src="replies[0].replyUserAvatar"></el-avatar>
            <div
              style="position: absolute;width:100%;width:150%;left:-25%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
              <p style="font-size: 14px">{{ replies[0].userName }}</p>
            </div>
          </div>
          <div style="position: absolute;left: 20%;width:80%;height: 100%;display: flex;align-items: center;">
            <p>{{ replies[0].replyContent }}</p>
          </div>
          </div>
        </li>
        <li style="position:relative;width: 100%;height: 25%;background-color: rgba(194,198,206,1)">
          <div v-if="replies[1] != null">
            <div style="position: absolute;left: 5%;width: 7%;height: 80%;top:10%">
              <el-avatar style="width: 60%;height: 60%;margin-left: 20%"
                         :src="replies[1].replyUserAvatar"></el-avatar>
              <div
                style="position: absolute;width:100%;width:150%;left:-25%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
                <p style="font-size: 14px">{{ replies[1].userName }}</p>
              </div>
            </div>
            <div style="position: absolute;left: 20%;width:80%;height: 100%;display: flex;align-items: center;">
              <p>{{ replies[1].replyContent }}</p>
            </div>
          </div>
        </li>
        <li style="position:relative;width: 100%;height: 25%;background-color: #ebeef5">
          <div v-if="replies[2] != null">
            <div style="position: absolute;left: 5%;width: 7%;height: 80%;top:10%">
              <el-avatar style="width: 60%;height: 60%;margin-left: 20%"
                         :src="replies[2].replyUserAvatar "></el-avatar>
              <div
                style="position: absolute;width:150%;left:-25%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
                <p style="font-size: 14px">{{ replies[2].userName }}</p>
              </div>
            </div>
            <div style="position: absolute;left: 20%;width:80%;height: 100%;display: flex;align-items: center;">
              <p>{{ replies[2].replyContent }}</p>
            </div>
          </div>
        </li>
        <li
          style="position:absolute;width: 100%;height: 25%;top:75%;background-color:rgba(194,198,206,1);display: flex;align-items: center;text-align: center;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="3"
            :total="total-0"
            @current-change="handleCurrentChange"
            style="left: 0;right: 0;margin: auto">
          </el-pagination>
        </li>
      </ul>
    </div>
    <div
      style="position: relative;width: 100%;margin-top:1%;height: 15%;display: flex;align-items: center;text-align: center">
      <div
        style="position: relative;width: 95%;height: 40px; padding-left: 5%;padding-top:5px;padding-bottom:5px;background-color: #545c64">
        <div style="width: 85%;">
          <el-input v-model="input" placeholder="Enter your reply" style="font-size: 16px;"></el-input>
        </div>
        <div style="position:absolute; left:88%;top:5px;height:100%;width: 10%;text-align: center">
          <el-button v-on:click="sendReply()" type="primary" round
                     style="height: 40px;width: 90%;font-size: 16px;padding: 0">Send
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DanmakuReply",
  data() {
    return {
      commentId: "",
      commentData: {},
      replies: [],
      total:"",
      input: ""
    }
  },
  methods: {
    //获取回复
    getData(commentId, page) {
      this.commentId = commentId;
      //url要改
      this.$http.get("http://localhost:8081/reply/get_reply?commentId=" + commentId + "&page=" + page).then((res) => {
        this.replies = res.data.data.replies;
        this.commentData = res.data.data.comment;
        this.total = res.data.data.total;
      });
    },
    //换页
    handleCurrentChange(val) {
      this.getData(this.commentId, val);
    },
    //发送回复
    sendReply() {
      //url要改
      /*this.$http.post().then((res) => {
        //发送成功
      });*/
      this.input = "";
    }
  }
}
</script>

<style scoped>
* {
  font-size: 0;
  margin: 0;
  padding: 0;
}

p {
  font-size: 20px;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
