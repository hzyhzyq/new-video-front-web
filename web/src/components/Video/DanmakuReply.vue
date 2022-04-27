<template>
  <div style="position: absolute;width: 100%;height: 100%;background-color: whitesmoke">
    <div style="position:relative;width:91%;margin-top:5%;height: 25%;">
      <div
        style="position: absolute;width: 100%;height: 80%;top: 20%;background-color: #545c64;border-top-right-radius: 5px;border-bottom-right-radius: 5px;"></div>
      <div style="position: absolute;left: 5%;width: 15%;height: 100%;">
        <el-avatar style="width: 60%;height: 60%;margin-left: 20%" :src="circleUrl "></el-avatar>
        <div
          style="position: absolute;width:100%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
          <p style="font-size: 14px; color: whitesmoke">!!!User Name</p>
        </div>
      </div>
      <div style="position: absolute;left: 25%;width:70%;height: 80%;top:20%;display: flex;align-items: center;">
        <p style="color: whitesmoke">!!!This is a comment comment comment comment comment comment comment comment comment</p>
      </div>
    </div>
    <div style="position: relative;width: 80%;height: 50%;margin-left:5%;">
      <ul style="width: 100%;height: 100%;background-color: #ebeef5">
        <li style="position:relative;width: 100%;height: 25%;background-color: #ebeef5">
          <div style="position: absolute;left: 5%;width: 7%;height: 80%;top:10%">
            <el-avatar style="width: 60%;height: 60%;margin-left: 20%" :src="circleUrl "></el-avatar>
            <div
              style="position: absolute;width:100%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
              <p style="font-size: 14px">!!!User Name</p>
            </div>
          </div>
          <div style="position: absolute;left: 15%;width:80%;height: 100%;display: flex;align-items: center;">
            <p>!!!This is a comment comment comment comment comment comment comment comment comment</p>
          </div>
        </li>
        <li style="position:relative;width: 100%;height: 25%;background-color: rgba(194,198,206,1)">
          <div style="position: absolute;left: 5%;width: 7%;height: 80%;top:10%">
            <el-avatar style="width: 60%;height: 60%;margin-left: 20%" :src="circleUrl "></el-avatar>
            <div
              style="position: absolute;width:100%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
              <p style="font-size: 14px">!!!User Name</p>
            </div>
          </div>
          <div style="position: absolute;left: 15%;width:80%;height: 100%;display: flex;align-items: center;">
            <p>!!!This is a comment comment comment comment comment comment comment comment comment</p>
          </div>
        </li>
        <li style="position:relative;width: 100%;height: 25%;background-color: #ebeef5">
          <div style="position: absolute;left: 5%;width: 7%;height: 80%;top:10%">
            <el-avatar style="width: 60%;height: 60%;margin-left: 20%" :src="circleUrl "></el-avatar>
            <div
              style="position: absolute;width:100%;height: 35%;top:65%;display: flex;align-items: center;text-align: center">
              <p style="font-size: 14px">!!!User Name</p>
            </div>
          </div>
          <div style="position: absolute;left: 15%;width:80%;height: 100%;display: flex;align-items: center;">
            <p>!!!This is a comment comment comment comment comment comment comment comment comment</p>
          </div>
        </li>
        <li style="position:absolute;width: 100%;height: 25%;top:75%;background-color:rgba(194,198,206,1);display: flex;align-items: center;text-align: center">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="3"
            :total="999"
          style="left: 0;right: 0;margin: auto">
          </el-pagination>
        </li>
      </ul>
    </div>
    <div style="position: relative;width: 100%;height: 15%;background-color: black;display: flex;align-items: center;text-align: center">
      <div style="position: relative;width: 90%;height: 50%; left: 5%;background-color: #ebeef5">
        <div style="width: 85%">
          <el-input v-model="input" placeholder="请输入内容" style="font-size: 16px"></el-input>
        </div>
        <div>
          <el-button type="primary" round>主要按钮</el-button>
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
      commentData: {},
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      input:""
    }
  },
  methods: {
    getData(commentId) {
      //url要改
      this.$http.get("http://rap2api.taobao.org/app/mock/301574/video/bullet-chatting").then((res) => {
        this.commentData = res.data.commentData;
      });
    },
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
