<template>
  <div style="position: relative;">
    <div v-for="item in videos" :key="item.id" class="card-style">
      <el-card shadow="hover" v-on:click.native="toVideoDetail(item)">
        <el-image style="height: 150px; width: 100%"
                  :src=item.pictureUrl
                  :fit="cover">
        </el-image>
        <div style="padding: 5px;">
          <span>{{ item.videoName }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {type: ''},
  //从主页中传入
  data() {
    return {
      cardStyle: {
        margin: '0px',
        padding: '0px',
        width: '300px',
        height: '200px',
        cursor: 'pointer',
        display: 'inline-block',
      },
      videos: [
        {
          videoId: "",
          videoName: "",
          videoOwnerName: "",
          videoOwnerId: "",
          videoOwnerAvatar: "",
          videoUrl: "",
          pictureUrl: ""
        }
      ],
    }
  },
  methods: {
    toVideoDetail(data) {
      console.log(data);
      this.$router.push("/video?type=" + this.type + "&id=" + data.id)
    }
  },
  mounted: function () {
    this.$http.get("http://localhost:8081/video/get_recommend_video?type=" + this.type, {withCredentials: true,}).then((res) => {
      if (res.data.code == 200) {
        this.videos = res.data.data;
      }
    });
  },
}
</script>

<style scoped>
.card-style {
  margin: 10px;
  padding: 0;
  width: 300px;
  height: 230px;
  cursor: pointer;
  display: inline-block;
}
</style>
