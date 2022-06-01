<template>
  <div>
    <My_Header v-bind:currentUser="currentUser"></My_Header>
    <div style="position: relative;width: 100%;height: 850px">
      <div class="main-box">
        <div class="box">
          <div class="title">{{ type }}</div>
          <VideoListDetail v-bind:videos="videos"></VideoListDetail>
        </div>
      </div>
    </div>
      <div class="pagination" style="display: flex;align-items: center;text-align: center;">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="12"
          :total="total"
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
import VideoListDetail from "./VideoListInDetail";

export default {
  name: "Detail",
  data() {
    return {
      currentUser: {},
      type: "",
      page: 1,
      total: 0,
      videos: []
    }
  },
  mounted: function () {
    this.type = this.$route.query.id;
    this.$http.get("http://localhost:8081/video/get_all_video?type=" + this.type + "&page=" + this.page, {withCredentials: true,}).then((res) => {
      if (res.data.code == 200) {
        this.videos = res.data.data;
        this.total = res.data.message - 0;
        console.log(this.total)
      }
    });
  },
  methods: {
    //换页
    handleCurrentChange(val) {
      console.log("换页" + val);
      this.page = val;
      this.$http.get("http://localhost:8081/video/get_all_video?type=" + this.type + "&page=" + this.page, {withCredentials: true,}).then((res) => {
        if (res.data.code == 200) {
          this.videos = res.data.data;
          this.total = res.data.message - 0;
          console.log(this.total)
        }
      });
    },
  },
  components: {
    My_Header,
    MY_Footer,
    VideoListDetail
  }
}
</script>

<style scoped>
* {
  font-size: 0;
  margin: 0;
  padding: 0;
}

.main-box {
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.box {
  position: relative;
  left: 0px;
  right: 0px;
  margin: auto;
  min-width: 1288px;
  width: 1288px;
  height: 100%;
}

.title {
  position: relative;
  top: 20px;
  font-size: 30px;
  font-weight: bold;
  margin: 20px 20px 50px;
}

.pagination {
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  top: -20px;
  width: 1288px;
  height: 0px;
}
</style>
