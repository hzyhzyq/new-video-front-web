<template>
  <div style="position:relative;width: 750px;height: auto">
    <p style="position:relative;margin-left: 5px;width:100px;display: inline-block;font-size: 15px;">VIDEO NAME</p>
    <div style="display: inline-block;position:relative;width: 320px;height: 60px;">
      <el-input v-model="input" placeholder="VIDEO NAME"></el-input>
    </div>
    <p style="position:relative;margin-left: 15px;width:100px;display: inline-block;font-size: 15px;">VIDEO TYPE</p>
    <div style="position:relative;width:185px;display: inline-block;font-size: 15px;">
      <el-select v-model="value" placeholder="VIDEO TYPE">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div style="position:relative;width: 740px;height: 200px">
      <p>VIDEO DESCRIBE</p>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="ENTER VIDEO DESCRIBE"
        resize="none"
        v-model="textarea">
      </el-input>
    </div>
    <div style="position:relative;width: 750px;height: 250px">
      <div style="position: absolute;top:0px;left: 0px;width: 360px;height: 250px">
        <el-upload
          class="upload-demo"
          ref="uploadVideo"
          list-type="text"
          accept=".mp4"
          action="http://localhost:8081/video/upload"
          :on-success="handleSuccessVideo"
          :on-error="handleErrorVideo"
          :file-list="fileList"
          :auto-upload=false
          :drag=true
          :limit=1
          with-credentials>
          <i class="el-icon-video-camera-solid" style="margin-top:50px;margin-bottom:20px;font-size: 50px"></i>
          <div class="el-upload__text">UPLOAD VIDEO</div>
          <div class="el-upload__tip" slot="tip">ONLY FOR MP4 FILE</div>
        </el-upload>
      </div>
      <div style="position: absolute;top:0px;left: 380px;width: 360px;height: 250px">
        <el-upload
          class="upload-demo"
          ref="uploadPicture"
          list-type="text"
          accept=".png,.jpg"
          action="http://localhost:8081/video/upload"
          :on-success="handleSuccessPicture"
          :on-error="handleErrorPicture"
          :file-list="fileList"
          :auto-upload=false
          :drag=true
          :limit=1
          with-credentials>
          <i class="el-icon-picture" style="margin-top:50px;margin-bottom:20px;font-size: 50px"></i>
          <div class="el-upload__text">UPLOAD FOR PICTURE</div>
          <div class="el-upload__tip" slot="tip">ONLY FOR PNG AND JPG FILE</div>
        </el-upload>
      </div>
    </div>
    <div style="position: relative;width:100px;left: 0;right: 0;margin:auto">
      <el-button size="small" type="success" @click="submitUpload">UPLOAD</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      fileList: [],
      textarea: "",
      options: [{
        value: 'movies',
        label: 'MOVIES'
      }, {
        value: 'games',
        label: 'GAMES'
      }, {
        value: 'news',
        label: 'NEWS'
      }],
      value: "",
      input: "",
      videoUrl: "",
      pictureUrl: "",
    };
  },
  methods: {
    //发送前检查
    submitUpload() {
      if (this.$refs.uploadVideo.uploadFiles.length == 0) {
        this.$message.error("lost video");
        return;
      }
      if (this.$refs.uploadPicture.uploadFiles.length == 0) {
        this.$message.error("lost picture");
        return;
      }
      if (this.input == "") {
        this.$message.error("lost video name");
        return;
      }
      if (this.value == "") {
        this.$message.error("lost video type");
        return;
      }
      this.$refs.uploadPicture.submit();
      this.$refs.uploadVideo.submit();
    },
    submitAll() {
      if (this.videoUrl == "error" && this.pictureUrl != "") {
        //删除数据库图片
        this.remove(this.pictureUrl);
        this.$message.error("send fail");
        return;

      }
      if (this.videoUrl != "" && this.pictureUrl == "error") {
        //删除数据库视频
        this.remove(this.videoUrl);
        this.$message.error("send fail");
        return;
      }
      if (this.videoUrl == "error" && this.pictureUrl == "error") {
        this.$message.error("send fail");
        return;
      }
      if (this.videoUrl == "") {
        return;
      }
      if (this.pictureUrl == "") {
        return;
      }
      //发送信息
      console.log("发送")
      this.sendAll();
    },
    //完整发送
    sendAll() {
      this.$http.post("http://localhost:8081/video/uploadVideo", {},
        {
          params: {
            videoName: this.input,
            videoDescribe:this.textarea,
            videoType: this.value,
            videoUrl: this.videoUrl,
            pictureUrl: this.pictureUrl,
          }
        })
        .then((res) => {
          if (res.data == null || res.data.code != 200) {
            this.$message({showClose: true,type: 'error',message:'send fail'});
          } else {
            this.$message({
              message: "success",
              type: 'success'
            });
          }
        });
    },
    //删除已发送的
    remove(url) {
      this.$http.post("http://localhost:8081/video/remove", {}, {
        params: {
          url: url
        }
      })
    },
    //成功时,判断返回值是否为error,是停止另一个发送，清空文件列表
    handleSuccessVideo(response, file, fileList) {
      if (response.data == "error") {
        this.$message.error("send fail");
        this.$refs.uploadVideo.clearFiles();
        this.$refs.uploadPicture.abort();
        this.$refs.uploadPicture.clearFiles();
      } else {
        this.$message({
          message: "success",
          type: 'success'
        });
      }
      this.videoUrl = response.data;
      this.submitAll();
    },
    handleSuccessPicture(response, file, fileList) {
      if (response.data == "error") {
        this.$message.error("send fail");
        this.$refs.uploadPicture.clearFiles();
        this.$refs.uploadVideo.abort();
        this.$refs.uploadVideo.clearFiles();
      } else {
        this.$message({
          message: "success",
          type: 'success'
        });
      }
      this.pictureUrl = response.data;
      this.submitAll();
    },
    //失败时,显示发送失败
    handleErrorVideo(err, file, fileList) {
      this.$message.error("send fail");
      this.videoUrl = "error";
      this.submitAll();
    },
    handleErrorPicture(err, file, fileList) {
      this.$message.error("send fail");
      this.pictureUrl = "error";
      this.submitAll();
    },
  },
}
</script>

<style scoped>
</style>
