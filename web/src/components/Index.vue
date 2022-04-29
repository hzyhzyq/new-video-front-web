<template>
  <div>
    <My_Header></My_Header>
    <div style="position: relative;min-width: 1288px;width: 100%;height: 100%;text-align: center">
      <div style="display: inline-block">
      <VideoList></VideoList>
      </div>
    </div>
    <MY_Footer></MY_Footer>
  </div>
</template>

<script>
import MY_Footer from "./My_Footer";
import My_Header from "./My_Header";
import VideoList from "./VideoList";

export default {
  name: "Index",
  data() {
    return {
    }
  },
  methods: {},
  components: {
    My_Header,
    MY_Footer,
    VideoList
  }
}
</script>

<style scoped>

</style>
