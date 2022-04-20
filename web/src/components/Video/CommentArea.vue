<template>
  <div style="position: relative; width: 100%">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="avatar">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "CommentArea",
  data() {
    return {
      circleUrl:'',
    }
  }
}
</script>

<style scoped>
.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 200px;
}.avatar{
   position: relative;
   width: 50px;
   height: auto;
   left: 0;
   right: 0;
   margin: auto;
 }
</style>
