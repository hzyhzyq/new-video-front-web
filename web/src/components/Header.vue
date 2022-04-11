<template>
  <div>
    <div class="top">
      <div class="left"> <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#ffd04b"
        active-text-color="#ffd04b">
        <el-menu-item index="1" style="left:5%">Video Website</el-menu-item>
      </el-menu></div>
      <div class="right">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#fff">
          <el-menu-item index="1">Login</el-menu-item>
          <el-menu-item index="2" >Register</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
.top{
  position: relative;
  width: 100%;
  height: auto;
  background:#545c64;
}
.left{
  position: relative;
  background: red;
  font-size: larger;
}
.right{
  position: absolute;
  top:0px;
  right: 5%;
  background: red;
}
</style>
