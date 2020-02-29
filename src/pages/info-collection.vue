<template>
  <div class="page-wrap">
    <!-- <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" @click="prev()" />信息采集
    </div>-->
    <div class="content-area">
      <p class="collect-title">订单号:1233488929191</p>
      <p class="sub-title">行驶证主页照</p>
      <div class="shoot-wrap" @click="openCameraPicture('1')">
        <img :src="src1" />
        <!-- <img  :src="../assets/images/car-card-icon.png" /> -->
        <!-- <input class="shoot-wrap-images" type="file" @change="getf($event,2)" /> -->
      </div>
      <p class="sub-title">行驶证副页照</p>
      <div class="shoot-wrap" @click="openCameraPicture('2')">
        <img :src="src2" />
      </div>
      <van-form class="form-area">
        <van-field
          v-model="form.number_type"
          name="车牌类型"
          label="车牌类型"
          @click="showPicker=true"
          placeholder="请选择"
        />
        <van-field v-model="form.number_value" name="车牌号码" label="车牌号码" placeholder="请输入" />
        <van-field v-model="form.car_type" name="车辆类型" label="车辆类型" placeholder="请输入" />
        <van-field v-model="form.use_nature" name="使用性质" label="使用性质" placeholder="请输入" />
        <van-field v-model="form.carId_code" name="车辆识别代码" label="车辆识别代码" placeholder="请输入" />
        <van-field v-model="form.engine_id" name="发动机号" label="发动机号" placeholder="请输入" />
        <van-field
          v-model="form.register_time"
          name="注册日期"
          label="注册日期"
          placeholder="请选择注册日期"
          @click="RegistrationDates(1)"
        />
        <van-field
          v-model="form.certify_time"
          name="发证日期"
          label="发证日期"
          placeholder="请选择发证日期"
          @click="RegistrationDates(2)"
        />
        <van-field v-model="form.location" name="住址" label="住址" placeholder="请输入" />
        <van-field v-model="form.manager_name" name="管理部门名称" label="管理部门名称" placeholder="请输入" />
        <van-field v-model="form.capacity_value" name="核定载人数" label="核定载人数" placeholder="请输入" />
        <van-field v-model="form.total_weight" name="总质量" label="总质量" placeholder="请输入" />
        <van-field v-model="form.car_weight" name="整备质量" label="整备质量" placeholder="请输入" />
        <van-field v-model="form.ratedLoad" name="核定载质量" label="核定载质量" placeholder="请输入" />
        <van-field v-model="form.traction_quality" name="准牵引质量" label="准牵引质量" placeholder="请输入" />
        <van-field v-model="form.outer_length" name="外廓尺寸" label="外廓尺寸" placeholder="请输入" />
        <!-- <van-field v-model="outer_width"
                   name="外廓尺寸宽"
                   label="外廓尺寸宽"
                   placeholder="请输入" />
        <van-field v-model="outer_height"
                   name="外廓尺寸高"
                   label="外廓尺寸高"
        placeholder="请输入" />-->
      </van-form>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          title="车牌类型"
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <van-popup v-model="RegistrationDate" position="bottom">
        <!-- <van-datetime-picker
          @cancel="RegistrationDate = false"
          @confirm="onConfirm"
          type="date"
          value="currentDate"
          bind:input="onInput"
          min-date="currentTime"
          formatter="formatter"
        />-->
        <van-datetime-picker
          v-model="currentDate"
          :formatter="formatter"
          :min-date="minDate"
          :max-date="maxDate"
          type="date"
          @confirm="confirm"
          @cancel="RegistrationDate = false"
        />
      </van-popup>
      <van-button type="info" class="button-style" size="large" @click="onSubmit">下一步</van-button>
    </div>
  </div>
</template>

<script>
//  import { bridge } from "@/assets/js/dsbridge";
import axios from "axios";
export default {
  data() {
    return {
      dataTime: "请选择时间",
      currentDate: new Date(),
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(),
      conut: 0,
      src1: require("../assets/images/6.jpeg"),
      src2: require("../assets/images/7.jpg"),
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
      },
      showPicker: false,
      RegistrationDate: false,
      columns: [
        "小型汽车",
        "小型新能源汽车",
        "大型汽车",
        "大型新能源汽车",
        "使馆汽车",
        "领馆汽车",
        "境外汽车",
        "外籍汽车"
      ],
      isUpdate: false
    };
  },
  mounted() {
    
   

    if (this.$route.query.isUpdate) {
      this.isUpdate = this.$route.query.isUpdate;
      this.form = this.$route.query.form;
    }
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
    if (localStorage.getItem("form")) {
      this.form = JSON.parse(localStorage.getItem("form"));
    }
  },
  methods: {
    openCameraPicture(imgid) {
       
      let apiData = {
        app_key: "UNICLOUD_APP",
        version: "v1.0.0",
        data: {}
      };
      let that = this;

      dsBridge.call("FunctionApi.openCameraPicture", apiData, function(v) {
        let ssddd = JSON.parse(v);

        let returndata = ssddd.data.path;
        // alert("returndata:"+returndata)
        // that.src1="file://"+returndata;
        // alert("this:"+that.src1)
        apiData.data.upload = {
          url:
            "http://103.120.225.226:18300/evi-car-service/manager/staff/carInfo/OCRIdentify",
          fileKey: "card_img",
          filePath: returndata,
          formParam: {}, 
          isLoading: "true"
        };
        dsBridge.call(
          "FunctionApi.uploadFile",
          JSON.stringify(apiData),
          function(v) {
            alert("v1:"+v);
            let cinfo = JSON.parse(v);
            alert("cinfo:"+cinfo);
            alert("state:"+cinfo.data.state);

            if (cinfo.data.state == "0") {
              alert("rere:"+cinfo.data.result)
              let c1 = JSON.parse(cinfo.data.result);
              alert("c1:"+c1);
              //赋值图片路径
              if (imgid == "1") {
                that.src1 = "";
              } else if (imgid == "2") {
                that.src2 = "";
              }

              // let c2 = c1.data.words_result;
              // alert("c1"+c1.data.words_result);
              // alert("c2"+c1.data.words_result.车辆识别代号);
              // alert("c3"+c1.data.words_result.车辆识别代号.words);
              // that.form.carId_code = c2.车辆识别代号.words;
              // that.form.location = c2.住址.words;
              // // that.form.number_value=cinfosss.品牌型号.words;
              // that.form.certify_time = c2.发证日期.words;
              // that.form.car_type = c2.车辆类型.words;
              // // that.form.number_value=cinfosss.所有人.words;
              // that.form.use_nature = c2.使用性质.words;
              // that.form.engine_id = c2.发动机号码.words;
              // that.form.number_value = c2.号牌号码.words;
              // that.form.register_time = c2.注册日期.words;
            }

            // alert("up_v");
          }
        );
      });
    },
    RegistrationDates(times) {
      this.RegistrationDate = true;
      this.conut = times;
    },
    formatDate: function(d) {
      return (
        d.getFullYear() +
        "-" +
        this.p(d.getMonth() + 1) +
        "-" +
        this.p(d.getDate())
      );
    },
    formatter(type, value) {
      // 格式化选择器日期
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      } else if (type === "hour") {
        return `${value}时`;
      } else if (type === "minute") {
        return `${value}分`;
      }
      return value;
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    confirm(d) {
      if (this.conut == 1) {
        this.form.register_time = this.formatDate(d);
      } else if (this.conut == 2) {
        this.form.certify_time = this.formatDate(d);
      }
      this.RegistrationDate = false;
      // console.log(this.form.register_time); // 打印出了时间
    },
    onSubmit() {
      // let params = this.form
      if (!this.isUpdate) {
        this.form.order_id = localStorage.getItem("order_id");
        localStorage.setItem("form", JSON.stringify(this.form));
        this.$router.push({ path: "/pre-review" });
      }
    },
    onConfirm(e) {
      // console.log(e);
      this.form.number_type = e;
      this.showPicker = false;
    },
    prev() {
      this.$router.go(-1);
    },
    jumpUrl(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  padding-left: 20px;
  padding-right: 20px;
}
.collect-title {
  font-size: 18px;
  font-weight: 600;
}
.sub-title {
  font-size: 14px;
}
.shoot-wrap {
  box-sizing: border-box;
  text-align: center;
  padding-top: 31px;
  width: 324px;
  height: 230px;
  border-radius: 16px;
  border: 1px #a3a3a3 dashed;
  margin: 0 auto;
  img {
    width: 260px;
  }
}
.content-area {
  margin-top: 20px;
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
.form-area {
  /deep/ .van-field__control {
    text-align: right;
  }
}
.shoot-wrap-images {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 86.4vw;
  height: 61.333vw;
}
</style>