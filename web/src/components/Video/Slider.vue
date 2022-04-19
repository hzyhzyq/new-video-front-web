<template>
  <div class="block">
    <span class="demonstration">弹幕不透明度</span>
    <el-slider
      class="slider"
      v-model="slider"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slider: 50
    }
  }
}
</script>

<style scoped>
.block{
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
.demonstration{
  font-size: 14px;
  color: black;
  line-height: 14px;
}
.slider{
  width: 80%;
  display: block;
}
</style>
