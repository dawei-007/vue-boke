<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <img
      v-if="src"
      class="about-content"
      :src="src"
      @load="srcLoaded = true"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.about-content {
  width: 600px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid black;
}
</style>
