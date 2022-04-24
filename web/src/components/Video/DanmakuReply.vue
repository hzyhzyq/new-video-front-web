<template>
  <div>
    <p>123</p>

  </div>
</template>

<script>
export default {
  name: "DanmakuReply",
  data() {
    return {
      commentData: {}
    }
  },
  methods: {
    getData(commentId) {
      //url要改
      this.$http.get("http://rap2api.taobao.org/app/mock/301574/video/bullet-chatting").then((res) => {
        this.commentData = res.data.commentData;
      });
    }
  }
}
</script>

<style scoped>

</style>
