<template>
<div>
  <My_Header v-bind:currentUser="currentUser"></My_Header>
  <div class="main-box">
    <div class="box">
      <div class="title">Games</div>
      <VideoList></VideoList>
    </div>
  </div>
  <div class="pagination" style="display: flex;align-items: center;text-align: center;">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="3"
      :total="100000"
      @current-change="handleCurrentChange"
      style="left: 0;right: 0;margin: auto;">
    </el-pagination>
 </div>
  <MY_Footer></MY_Footer>
</div>
</template>

<script>
import My_Header from "./My_Header";
import MY_Footer from "./My_Footer";
import VideoList from "./VideoList";

export default {
  name: "Detail",
  data() {
    return {
      currentUser:{},
    }
  },
  components: {
    My_Header,
    MY_Footer,
    VideoList
  }
}
</script>

<style scoped>
*{
  font-size: 0;
  margin: 0;
  padding:0;
}
.main-box{
  position: relative;width: 100%;height: auto;margin-bottom: 20px;
}
.box{
  position:relative; left:0px; right:0px; margin:auto;min-width: 1288px;width:1288px;height: 100%;
}
.title{
  position: relative;top:20px;font-size: 30px;font-weight:bold;
  margin: 20px 20px 50px;
}
.pagination{
  position: relative;
  left: 0;right:0;margin:auto;top:20px;
  width: 1288px;
  height: 50px;
}
</style>
