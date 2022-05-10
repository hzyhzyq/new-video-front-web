<template>
  <div style="width: 360px">
    <el-upload
      class="upload-demo"
      ref="upload"
      list-type="picture"
      accept=".mp4"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload=false
      :drag=true
      :limit = 1
      with-credentials>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      console.log("1")
      console.log(this.fileList)
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
}
</script>

<style scoped>

</style>
