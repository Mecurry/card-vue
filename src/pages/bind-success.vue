<template>
  <div>
    <!-- <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" />绑定成功
    </div> -->
    <div class="img-wrap-f">
      <div class="img-wrap">
        <img src="../assets/images/success.png" />
        <p class="success_p_a">绑定成功</p>
        <p class="success_p_b">5s后返回</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer:null
    };
  },
  mounted() {
   this.timer =  setTimeout(() => {
      this.jumpUrl("/install-activaty");
    }, 5000);
  },
  methods: {
    jumpUrl(url) {
      this.$router.push(url);
    }
  },
  beforeDestroy(){
    clearTimeout(this.timer)
  }
};
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
.img-wrap-f {
  .img-wrap {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    .success_p_a {
      font-weight: bold;
      padding: 10vw 0;
    }
    .success_p_b {
      color: #c2c1c4;
      font-size: 3.5vw;
    }
    img {
      margin-top: 40vw;
    }
  }
}
</style>