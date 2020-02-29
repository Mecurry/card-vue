<template>
  <div class="page-wrap">
    <!-- <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" @click="prev()" />确认用户信息
    </div> -->
    <p class="title">标识检索</p>
    <p class="sub-title">请输入以下信息</p>
    <div class="field-wrap">
      <van-field v-model="value1" class="van-field-wrap" placeholder="请输入预约的编号 / 标识编号">
        <img slot="left-icon" src="../assets/images/ip-icon.png" style="width: 20px; height: 20px" />
      </van-field>
    </div>
    <van-button type="info" class="button-style" size="large" @click="searchUser()">搜索</van-button>
    <div class="scanning">
      <img src="../assets/images/scanning.png" style="width:20px;height:20px;margin-right:10px;" />
      扫码>>
    </div>
    <div class="bot-area">
      <img @click="jumpUrl('/record')" src="../assets/images/search-icon-1.png" />
      <img src="../assets/images/search-icon-2.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "111"
    };
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    jumpUrl(url) {
      this.$router.push(url);
    },
    searchUser() {
      // let params = {
      //   order_id: this.value1
      // };
      // this.$api.common.searchInfo(params).then(res => {
      //   // if (res.data.code == 200) {
      //     localStorage.setItem("username", res.data.username);
      //     localStorage.setItem("idcard", res.data.idcard);
      //     localStorage.setItem("order_id", this.value1);
      //     this.$router.push("/confirm-user-info");
      //   // }
      // });
      let username = "呵呵";
      let idcard = "bdfd4353543";
      localStorage.setItem("username", username);
      localStorage.setItem("idcard", idcard);
      localStorage.setItem("order_id", this.value1);
      this.$router.push("/confirm-user-info");
    }
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
.title {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #333333;
}
.sub-title {
  margin-top: 10px;
  font-size: 14px;
  color: #666666;
}
.page-wrap {
  padding: 0 20px;
}
.scanning {
  display: flex;
  justify-content: center;
}
.field-wrap {
  margin-top: 20px;
  margin-bottom: 85px;
}
.button-style {
  border-radius: 10px;
  margin-bottom: 20px;
  background: linear-gradient(
    110deg,
    rgba(123, 227, 225, 1) 0%,
    rgba(145, 202, 255, 1) 100%
  );
  border-color: initial;
  border-radius: 21.5px;
}
.van-field-wrap {
  border-bottom: 1px solid #c8c8c8;
  padding: 0;
  /deep/ .van-cell {
    border-bottom: 1px solid #c8c8c8;
    padding: 0;
  }
}
.bot-area {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 360px;
}
</style>