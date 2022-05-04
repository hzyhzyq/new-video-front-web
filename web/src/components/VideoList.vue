<template>
  <div style="position: relative;min-height: 450px;">
    <div v-for="item in videos" :key="item.id" class="card-style">
      <el-card shadow="hover" v-on:click.native="toVideoDetail(item)">
        <el-image :src="'http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
                  style="height: 80%; width: 100%">
        </el-image>
        <div style="padding: 5px;">
          <span>好吃的汉堡</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
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
      videoType: "",
      videos: [
        {
          videoId: "1",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "2",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "3",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "4",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "5",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "6",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "7",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "8",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "9",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "10",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        },
        {
          videoId: "11",
          videoName: "AAA",
          videoOwnerName: "aaa",
          videoOwnerId: "01",
          videoOwnerAvatar: "A",
          videoUrl: "ASA",
          pictureUrl: "http://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        }
      ],
    }
  },
  methods: {
    toVideoDetail(data) {
      console.log(1231, data)
      this.$router.push(`/video?type=news&id=${data.videoId}`)
    }
  }
}
</script>

<style scoped>
  .card-style {
    margin: 10px;
    padding: 0;
    width: 300px;
    height: 200px;
    cursor: pointer;
    display: inline-block;
  }
</style>
