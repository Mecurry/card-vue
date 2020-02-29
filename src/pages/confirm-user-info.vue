<template>
  <div class="page-wrap">
    <!-- <div class="head-title" @click="back()"> -->
    <!-- <van-icon class="return-icon" name="arrow-left" />确认用户信息 -->
    <!-- </div> -->
    <div class="info-care">
      <div class="info-area-1">
        <p>姓名：{{username}}</p>
        <p>等待安装激活</p>
      </div>
      <div class="info-area-2">身份证号:{{idcard}}</div>
    </div>
    <div class="tips-area">
      <div style="margin-top:3.5px;">
        <van-icon name="info" />
      </div>
      <div>
        <span>操作前请先核对用户信息</span>
      </div>
    </div>
    <div class="number-type-area" v-if="showTypeCar">
      <p class="type-car-title">请选择车牌类型</p>
      <div class="type-car-title-content">
        <input
          type="text"
          class="number-type-area-input"
          readonly
          v-model="cardTitle"
          @focus="cardfocus"
          @blur="cardblur"
        />
        <p>车牌类型</p>
        <ul class="number-type-area-ul" :class="{'opens':flag}">
          <li v-for="(item, index) in items" :key="index" @click="Vehicle(item)">{{item.title}}</li>
        </ul>
      </div>
      <!-- <div class="type-car-card"
           @click="showPicker=true">
        <p class="type-car-card-title">车牌类型</p>
        <p class="type-car-sub">小型汽车</p>
      </div>
      <van-popup v-model="showPicker"
                 position="bottom">
        <van-picker show-toolbar
                    title="选择车型"
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm" />
      </van-popup>-->
    </div>
    <van-button
      type="info"
      class="button-style"
      size="large"
      @click="jumpUrl('/info-collection')"
    >确定</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order_id: "",
      token: "",
      username: "",
      idcard: "",
      flag: false,
      cardTitle: "小型汽车",
      showTypeCar: true,
      showPicker: false,

      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      items: [
        { title: "小型汽车" },
        { title: "小型新能源汽车" },
        { title: "大型汽车" },
        { title: "大型新能源汽车" },
        { title: "使馆汽车" },
        { title: "领馆汽车" },
        { title: "境外汽车" },
        { title: "外籍汽车" }
      ]
    };
  },
  created() {
    let order_id1 = this.$route.query.order_id;
    let token1 = this.$route.query.token;
    let userdata1 = this.$route.query.data;
    this.order_id = order_id1;
    this.token = token1;
    this.idcard = JSON.parse(userdata1).idcard;
    this.username = JSON.parse(userdata1).username;
    localStorage.setItem("username", JSON.parse(userdata1).username);
    localStorage.setItem("order_id", order_id1);
  },
  mounted() {},
  methods: {
    cardblur() {
      this.flag = false;
    },
    cardfocus() {
      this.flag = true;
    },
    Vehicle(val) {
      this.flag = false;
      this.cardTitle = val.title;
    },
    jumpUrl(url) {
      this.$router.push(url);
    },
    onConfirm() {}
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
.page-wrap {
  padding: 1px 20px;
  background-color: #dfebff;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  .number-type-area {
    .type-car-title-content {
      position: relative;
      p {
        position: absolute;
        top: 0;
        left: 10px;
        color: #7b7b7b;
        height: 12vw;
        line-height: 12vw;
      }
    }
    .number-type-area-input {
      border: 0;
      width: 100%;
      height: 12vw;
      box-sizing: border-box;
      padding: 0 10px;
      text-align: right;
    }
    .number-type-area-ul {
      overflow-x: scroll;
      height: 0px;
      transition-duration: 0.3s;
      border: 0px;
      background: #fff;
      li {
        box-sizing: border-box;
        padding-left: 10px;
        height: 25px;
        line-height: 25px;
      }
      li:hover {
        background-color: #2296ff;
        color: #fff;
      }
    }
  }
}
.info-care {
  box-sizing: border-box;
  background: linear-gradient(110deg, #00c7ff 0%, #2296ff 100%);
  border-radius: 4px;
  color: #fff;
  padding-top: 25px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100px;
  .info-area-1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
.button-style {
  position: absolute;
  width: 300px;
  height: 43px;
  bottom: 20px;
  left: 35px;
  border-radius: 10px;
  margin-bottom: 20px;
  background: linear-gradient(110deg, #00c7ff 0%, #2296ff 100%);
  border-color: initial;
  border-radius: 21.5px;
}
.tips-area {
  display: flex;
  margin-top: 10px;
  color: #d47044;
  text-align: center;
  justify-content: center;
}
.type-car-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-top: 20px;
  margin-bottom: 10px;
}
.type-car-card {
  box-sizing: border-box;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #fff;
  .type-car-card-title {
    color: #7b7b7b;
  }
}
.opens {
  height: 53.336vw !important;
  border: 1px solid #e3e3e3 !important;
}
</style>