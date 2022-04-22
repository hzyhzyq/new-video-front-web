<template>
  <div style="position: relative; width: 100%;height: auto;min-width: 597px">
    <div class="comment-box">
      <h3 style="font-size: 19px;">Comment</h3>
      <div style="position: relative;margin-top:15px;width: 85%;height: auto;">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="Enter your comment"
          resize="none"
          maxlength="256"
          :show-word-limit="true"
          v-model="textarea">
        </el-input>
      </div>
      <div style="position: absolute;right: 5%;top:55px;width: 50px;height: 50px;">
        <el-button type="primary" icon="el-icon-check" circle style="width: 50px;height: 50px"></el-button>
      </div>
    </div>
    <el-row style="height: auto;border-radius:5px;border: #EBEEF5 solid 1px;margin-top: 20px;margin-bottom: 20px"
            v-for="row in 8" :key="row">
      <el-col :span="4">
        <div class="grid-content" style="height: 100%;">
          <div style="position: absolute;height: 55%;width:100%;top: 20%;border-right: #EBEEF5 solid 1px"></div>
          <div class="avatar">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
          </div>
          <p>UserName{{ row }}</p>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content" style="height: auto;">
          <div
            style="position: relative; width: 90%; min-height:130px;height:auto;left: 5%;text-align: left;display: flex;">
            <p>This is a comment comment comment comment</p></div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "CommentArea",
  data() {
    return {
      circleUrl: '',
      textarea: ''
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

p {
  font-size: 16px;
  word-wrap: break-word;
  margin-top: auto;
  margin-bottom: auto;
}

.comment-box {
  position: relative;
  height: auto;
  margin-top: 3%;
  padding: 1% 5% 2%;
  width: 90%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: #EBEEF5 solid 1px;
}

.grid-content {
  position: relative;
  min-height: 130px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px
}

.avatar {
  position: relative;
  width: 50px;
  height: auto;
  left: 0;
  right: 0;
  top: 20px;
  margin: auto auto 30px;
  text-align: center;
}
</style>
