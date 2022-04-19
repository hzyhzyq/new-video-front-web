<template>
  <div >
    <div style="position: relative; width: 100%; height:100%;">
      <h1>RecommendVideo</h1>
      <ul>
        <li v-for="row in 8" :key="row" style="margin-bottom:10% ">
          <el-card :body-style="{ padding: '0', width:'100%' }" shadow="hover" >
            <div style="position: relative; width: 50%;height: 0;padding-bottom: 30%;display: inline-block">
              <el-image :src='"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"'  style="position:absolute;width:100%;height: 100%"></el-image>
            </div>
            <div style="position: relative; width: 50%;height: 0;padding-bottom: 30%;display: inline-block">
              <div style="position:absolute;width:80%;height: 100%;left:10%;top:40%;font-size: 20px;text-align: left">123{{row}}</div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendVideoList"
}
</script>

<style scoped>
*{
  font-size: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
h1{
  font-size: 20px;
  margin-bottom: 10%;
}
</style>
