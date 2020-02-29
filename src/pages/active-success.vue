<template>
  <div>
    <!-- <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" />激活成功
    </div> -->
    <div class="img-wrap">
      <img src="../assets/images/active-success.png" />
    </div>
    <div class="img-wrap">
      <img src="../assets/images/active-success-text.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {
    prev() {
      this.$router.go(-1)
    },
    jumpUrl(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.head-title {
  position: relative;
  text-align: center;
  margin-top: 10px;
  .return-icon {
    margin-top: 5px;
    position: absolute;
    left: 0;
  }
}
.img-wrap {
  text-align: center;
  img {
    margin-top: 40px;
  }
}
</style>