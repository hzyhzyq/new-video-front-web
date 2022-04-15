<template>
  <div style="position: absolute; width: 1288px;height: 450px;">
    <el-row v-for="row in 2" :key="row">
      <el-col :span="10" style="height: auto; width: auto; margin: 10px" v-for="col in 4" :key="col">
        <el-card :body-style="{margin:'0px', padding: '0px',width:'300px',height:'200px'}" shadow="hover">
          <el-image :src="'http://shahhkjkdow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
                  style="height: 80%; width: 100%">
          </el-image>
          <div style="padding: 5px;">
            <span>好吃的汉堡{{row}}{{col}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "VideoList"
}
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
</style>
