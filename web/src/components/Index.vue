<template>
  <div>
    <My_Header></My_Header>
    <MY_Footer></MY_Footer>
  </div>
</template>

<script>
import MY_Footer from "./My_Footer";
import My_Header from "./My_Header";

export default {
  name: "Index",
  data() {
    return {
      videos: [
        {id: "1", name: "abab"},
        {id: "2", name: "ccc"},
        {id: "3", name: "dddd"},
      ]
    }
  },
  methods: {},
  components: {
    My_Header,
    MY_Footer
  }
}
</script>

<style scoped>

</style>
