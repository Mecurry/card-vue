<template>
  <div class="page-wrap">
    <!-- <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" @click="prev()" />信息预审
    </div> -->
    <van-cell-group>
      <van-cell title="车牌类型：" :value="form.number_type" />
      <van-cell title="车牌号码" :value="form.number_value" />
      <van-cell title="车辆类型" :value="form.car_type" />
      <van-cell title="使用性质" :value="form.use_nature" />
      <van-cell title="车辆识别代码" :value="form.carId_code" />
      <van-cell title="发动机号" :value="form.engine_id" />
      <van-cell title="注册日期" :value="form.register_time" />
      <van-cell title="发证日期" :value="form.certify_time" />
      <van-cell title="住址" :value="form.location" />
      <van-cell title="管理部门名称" :value="form.manager_name" />
      <van-cell title="核定载人数" :value="form.capacity_value" />
      <van-cell title="总质量" :value="form.total_weight" />
      <van-cell title="核定载质量" :value="form.ratedLoad" />
      <van-cell title="准牵引质量" :value="form.traction_quality" />
      <van-cell title="外廓尺寸" :value="form.outer_length" />
    </van-cell-group>
    <div class="divide"></div>
    <div class="button-area">
      <van-button type="info" class="button-1" size="normal" @click="edit()">修改</van-button>
      <van-button type="info" class="button-2" size="normal" @click="onSubmit()">确认无误</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        car_type: "",
        number_value: "",
        number_type: "",
        use_nature: "",
        carId_code: "",
        engine_id: "",
        register_time: "",
        certify_time: "",
        location: "",
        manager_name: "",
        capacity_value: "",
        total_weight: "",
        car_weight: "",
        ratedLoad: "",
        traction_quality: "",
        outer_length: "",
        outer_width: "",
        outer_height: "",
        order_id: ""
      }
    };
  },
  mounted() {
    if (localStorage.getItem("form")) {
      this.form = JSON.parse(localStorage.getItem("form"));
    }
  },
  methods: {
    edit() {
      this.$router.push({ path: "/info-collection" });
    },
    prev() {
      this.$router.go(-1);
    },
    jumpUrl(url) {
      this.$router.push(url);
    },
    onSubmit() {

      

      // console.log('ddd');
      let params = this.form;
      this.$api.common.insert(params).then(res => {
        if (res.code == 200) {
         
          // localStorage.setItem("form", JSON.stringify(this.form));
          let VehicleCode = res.data;
          localStorage.setItem("VehicleCode",VehicleCode);
           this.$router.push("/bind");
        }else{
          alert(res.data)
        }
      });
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
.divide {
  height: 20px;
  background-color: #eaeaea;
}
.button-1 {
  border-radius: 18px;
  background-color: #fff;
  border-color: rgba(145, 202, 255, 1);
  color: rgba(145, 202, 255, 1);
}
.button-2 {
  border-radius: 18px;
  width: 305px;
  border-color: initial;
  background: linear-gradient(
    110deg,
    rgba(123, 227, 225, 1) 0%,
    rgba(145, 202, 255, 1) 100%
  );
}
.button-area {
  padding-top: 5px;
  padding-left: 5px;
  box-sizing: border-box;
}
.van-cell {
  padding-top: 12px;
  padding-bottom: 11px;
}
.van-cell:not(:last-child)::after {
  border: none;
}
</style>