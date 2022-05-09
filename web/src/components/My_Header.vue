<template>
  <div>
    <div class="top">
      <div class="left">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="white"
          active-text-color="#white">
          <el-menu-item index="1" style="left:5%"><a href="/home">Video Website</a></el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#fff">

          <el-menu-item index="1" v-if="currentUser.id == null"><a href="/login">Login</a></el-menu-item>
          <el-menu-item index="2" v-if="currentUser.id == null"><a href="/register">Register</a></el-menu-item>
          <el-menu-item index="3" v-if="currentUser.id != null"><a href="/user">{{currentUser.loginName}}</a></el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my_header",
  props:{currentUser: {},},
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.top {
  position: relative;
  width: 100%;
  height: auto;
}

.left {
  position: relative;
  top: 0px;
}

.right {
  position: absolute;
  top: 0px;
  right: 5%;
}
</style>
