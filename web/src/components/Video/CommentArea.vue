<template>
  <div style="position: relative; width: 100%;height: auto">
    <el-row style="height: auto">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="avatar">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
          </div>
          <p>UserName</p>
        </div>
      </el-col>
      <el-col :span="20" style="height: auto">
        <div class="grid-content bg-purple-light">
          <div style="position: relative; width: 90%; height:auto;left: 5%;text-align: left;top:45px">
            <p>This is a  dsaddsdaddaaaaa dsaddsdad dsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaadaaaaadsaddsdaddaaaaa  dsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaa dsaddsdaddaaaaadsaddsdaddaaaaadsaddsdaddaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
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
      circleUrl:'',
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-size: 10px;
}
p{
  font-size: 16px;
  word-wrap:break-word;
}
.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  position: relative;
  border-radius: 4px;
  height: auto;
  text-align: center;
}.avatar{
   position: relative;
   width: 50px;
   height: auto;
   left: 0;
   right: 0;
   top:20px;
   margin: auto auto 30px;
   text-align: center;
 }
</style>
