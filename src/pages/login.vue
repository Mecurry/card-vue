<template>
  <div class="page-wrap">
    <img class="head-img" src="../assets/images/login-img.png" />
    <div class="info-area">
      <p style="padding-left:30px">HI，欢迎登录</p>
      <div class="form-wrap">
        <van-field v-model="user" placeholder="请输入用户名">
          <img slot="left-icon" src="../assets/images/user.png" style="width: 20px; height: 20px" />
        </van-field>
        <van-field v-model="psd" placeholder="请输入密码">
          <img
            slot="left-icon"
            src="../assets/images/password.png"
            style="width: 20px; height: 20px"
          />
        </van-field>
        <van-button type="info" class="button-style" size="large" @click="login()">登录</van-button>
      </div>
      <!-- <van-dialog v-model="show" title="弹出框" show-cancel-button :beforeClose="chargeBtn">
       
      </van-dialog> -->
    </div>
  </div>
</template>

<script>
// import md5 from "js-md5";
// import axios from "axios";
// import { Dialog, Button, Row, Col } from 'vant'     
export default {
  //  components: {
  //    "van-dialog": Dialog,
  // },
  data() {
    return {
      show: false,
      user: "",
      psd: ""
    };
  },
  mounted() {},
  methods: {
    jumpUrl(url) {
      this.$router.push(url);
    },
    login() {


       this.$router.push("/info-search");
      // let params = {
      //   username: this.user,
      //   password: this.psd
      // };
      // axios({
      //   method: "post",
      //   url: "http://103.120.226.10:8081/smartcityWeChat/auth/getToken",
      //   data: params,
      //   headers: {
      //     appKey: "80349e231ee02804237ac695",
      //     "Content-Type": "application/json",
      //     platform: "1",
      //     // token:1,
      //     deviceModel: "121",
      //     devId: "cd04bccf561d6e2bcb886193546bdc5d"
      //   }
      // }).then(function(res) {
      //   console.log(res);
      //   if (res.data.code == 200) {
      //     this.$router.push("/info-search");
          
      //   } else {
      //     console.log("错误");
          
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.head-img {
  width: 100%;
}
.form-wrap {
  padding: 26px;
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
  margin-top: 80px;
}
</style>