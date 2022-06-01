<template>
  <div style="position: relative; width: 100%;height: auto;min-width: 597px">
    <div style="position: relative;width: 100%;height: 945px;top:-60px;">
      <el-row style="height: auto;border-radius:5px;border: #EBEEF5 solid 1px;margin-top: 20px;margin-bottom: 20px"
              v-for="row in comment" :key="row">
        <el-col :span="4">
          <div class="grid-content" style="height: 100%;">
            <div style="position: absolute;height: 55%;width:100%;top: 20%;border-right: #EBEEF5 solid 1px"></div>
            <div class="avatar">
              <el-avatar :size="50" :src=row.userAvatar></el-avatar>
            </div>
            <p>{{ row.userName }}</p>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content" style="height: auto;">
            <div
              style="position: relative; width: 90%; min-height:130px;height:auto;left: 5%;text-align: left;display: flex;">
              <p>{{row.content}}</p></div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="pagination" style="display: flex;align-items: center;text-align: center;">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="5"
        :total="total"
        @current-change="handleCurrentChange"
        style="left: 0;right: 0;margin: auto;">
      </el-pagination>
    </div>
  </div>

</template>

<script>
export default {
  name: "CommentArea",
  data() {
    return {
      page: 1,
      total:0,
      id:"",
      comment:[]
    }
  },
  mounted: function () {
    console.log(this.$route.query.id)
    this.id = this.$route.query.id;
    this.$http.get("http://localhost:8081/comment/get_all_comment?videoId=" + this.id + "&page=" + this.page, {withCredentials: true,}).then((res) => {
      if (res.data.code == 200) {
        this.comment = res.data.data;
        this.total = res.data.message - 0;
        console.log(this.comment)
      }
    });
  },
  methods: {
    //换页
    handleCurrentChange(val) {
      console.log("换页" + val);
      this.page = val;
      this.$http.get("http://localhost:8081/comment/get_all_comment?videoId=" + this.id + "&page=" + this.page, {withCredentials: true,}).then((res) => {
        if (res.data.code == 200) {
          this.comment = res.data.data;
          this.total = res.data.message - 0;
        }
      });
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

p {
  font-size: 16px;
  word-wrap: break-word;
  margin-top: auto;
  margin-bottom: auto;
}



.grid-content {
  position: relative;
  min-height: 130px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px
}

.avatar {
  position: relative;
  width: 50px;
  height: auto;
  left: 0;
  right: 0;
  top: 20px;
  margin: auto auto 30px;
  text-align: center;
}
</style>
