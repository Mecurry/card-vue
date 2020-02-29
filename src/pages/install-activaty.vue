<template>
  <div class="page-wrap">
    <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" @click="prev()" />安装激活
    </div>
    <div class="shoot-item">
      <p>电子标识</p>
      <div class="shoot-wrap">
        <img v-if="scr1==''" src="../assets/images/scan-bind.png" />
        <img class="loaded-img" v-else :src="scr1" />
        <input class="shoot-wrap-images" type="file" @change="getf($event,1)" />
      </div>
    </div>
    <div class="shoot-item">
      <p>车辆正面照</p>
      <div class="shoot-wrap">
        <img v-if="scr2==''" src="../assets/images/car-icon.png" />
        <img class="loaded-img" v-else :src="scr2" />
        <input class="shoot-wrap-images" type="file" @change="getf($event,2)" />
      </div>
    </div>
    <div class="shoot-item">
      <p>行驶证主页照</p>
      <div class="shoot-wrap">
        <img v-if="scr3==''" src="../assets/images/car-card-icon.png" />
        <img class="loaded-img" v-else :src="scr3" />
        <input class="shoot-wrap-images" type="file" @change="getf($event,3)" />
      </div>
    </div>
    <div class="shoot-item">
      <p>行驶证副页照</p>
      <div class="shoot-wrap">
        <img v-if="scr4==''" src="../assets/images/card-icon.png" />
        <img class="loaded-img" v-else :src="scr4" />
        <input class="shoot-wrap-images" type="file" @change="getf($event,4)" />
      </div>
    </div>
    <van-button type="info" class="button-style" size="large" @click="active()">确定激活</van-button>
  </div>
</template>

<script>
// import qs from "qs";
// import axios from 'axios'
export default {
  data() {
    return {
      scr1: [],
      scr2: [],
      scr3: [],
      scr4: []
    };
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    jumpUrl(url) {
      this.$router.push(url);
    },
    getf(event, way) {
      switch (way) {
        case 1:
          this.scr1 = event.target.files[0];
          break;
        case 2:
          this.scr2 = event.target.files[0];
          break;
        case 3:
          this.scr3 = event.target.files[0];
          break;
        case 4:
          this.scr4 = event.target.files[0];
          break;
      }
    },
    active() {
      let order_id = localStorage.getItem("order_id");
      // let formData = new FormData();
      // formData.append('order_id', order_id);
      // formData.append('evi_car_id', '22232222');
      // formData.append('car_evi_front_pic', this.scr1);
      // formData.append('car_front_pic', this.scr2);
      // formData.append('card_front_pic', this.scr3);
      // formData.append('card_back_pic', this.scr4);

      // const instance = axios.create({
      //   withCredentials: true
      // })

      // instance.post('http://103.120.225.226:18300/evi-car-service//manager/staff/carInfo/activation', formData).then(res => {
      //   if (res.code == 200) {
      //     console.log(res)
      //   }
      // })

      //   let params = {
      //   order_id: order_id,
      //   evi_car_id: '22232222',
      //   car_evi_front_pic: this.scr1,
      //   car_front_pic: this.scr2,
      //   card_front_pic: this.scr3,
      //   card_back_pic: this.scr4
      // }
      let params = new FormData();
      params.append("order_id", order_id);
      params.append("evi_car_id", "100");
      params.append("car_evi_front_pic", this.scr1);
      params.append("car_front_pic",  this.scr2);
      params.append("card_front_pic",  this.scr3);
      params.append("card_back_pic",  this.scr4);
        this.$api.common.activation(params).then(res => {
            console.log(res)
        if (res.code == 200) {
          console.log(res)
          this.$router.push('/active-success')
        }else{
          alert(res.data);
        }
      })
      // axios({
      //   method: "post",
      //   url:
      //     "http://103.120.225.226:18300/evi-car-service/manager/staff/carInfo/activation",
      //   headers: {
      //     "Content-Type": "application/form-data",
      //     "X-Requested-With": "XMLHttpRequest",
      //     "X-token": "bb822996f2ce4696ba31bf8fd3e13abe",
      //     appKey: "80349e231ee02804237ac695"
      //   },
      //   data: params
      // }).then(res => {
      //   if (res.code == 200) {
      //     alert(123);
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  position: relative;
}
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
.shoot-item {
  margin-bottom: 20px;
  position: relative;
  p {
    margin-left: 10px;
    font-size: 14px;
    color: #7b7b7b;
  }
}
.shoot-wrap {
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  width: 324px;
  height: 230px;
  border-radius: 16px;
  border: 1px #a3a3a3 dashed;
  margin: 0 auto;
  margin-top: 5px;
  img {
    margin-top: 31px;
    width: 219px;
  }
  .loaded-img {
    margin-top: 0;
    width: 100%;
    height: 100%;
  }
  .shoot-wrap-images {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 86.4vw;
    height: 61.333vw;
  }
}
.button-style {
  width: 335px;
  border-radius: 10px;
  background: linear-gradient(
    110deg,
    rgba(123, 227, 225, 1) 0%,
    rgba(145, 202, 255, 1) 100%
  );
  border-color: initial;
  border-radius: 21.5px;
}
</style>