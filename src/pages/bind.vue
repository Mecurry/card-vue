<template>
  <div class="page-wrap">
    <!-- <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" @click="prev()" />标识绑定
    </div> -->
    <div class="info-area">
      <p>号牌类型：{{forms.numberType}}</p>
      <p>号牌号码：{{forms.numberValue}}</p>
      <p>车辆类型：{{forms.carType}}</p>
      <p>使用性质：{{forms.useNature}}</p>
      <p>车辆识别代号：{{forms.caridCode}}</p>
      <p>发动机号：{{forms.engineId}}</p>
      <p>机动车所有人姓名：{{forms.username}}</p>
      <p>管理部门名称：{{forms.managerName}}</p>
    </div>
    <div class="shoot-area">
      <p>电子标识</p>
      <div class="shoot-wrap" @click="openCameraScan()">
        <img src="../assets/images/scan-bind.png" />
      </div>
    </div>
    <div class="ele-num">
      <div class="left-icon">
        <img src="../assets/images/line.png" />
      </div>
      <div class="right-content">No.3200000000000-1</div>
    </div>
    <van-button type="info" class="button-style" size="large" @click="bind()">绑定</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: '',
      forms:{}
    }
  },
  created(){
    this.getData()
  },
  mounted() {

  



    if (localStorage.getItem('form')) {
      this.form = JSON.parse(localStorage.getItem('form'))
      this.form.username = localStorage.getItem('username')
    }
    Date.prototype.Format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
  },
  methods: {
    prev() {
      this.$router.go(-1)
    },
    jumpUrl(url) {
      this.$router.push(url)
    },
    getData(){
      const params = {
        carId_code:localStorage.getItem('VehicleCode')
      }
      this.$api.common.getbinds(params).then(res => {
         if (res.code == 200) {
           this.forms = res.data;
          
         }
      })
    },
    bind() {
      let params = {
        order_id: localStorage.getItem('order_id'),
        number_value: '111111111',
        evi_id: '22232222',
        evi_status: '111111111',
        create_time:new Date().Format("yyyy-MM-dd")
      }
      this.$api.common.eviBind(params).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$router.push('/bind-success')
        }
      })
    },

    openCameraScan() {
      let apiData = {
        app_key: "UNICLOUD_APP",
        version: "v1.0.0",
        data: {}
      };
      let that = this;

      dsBridge.call("FunctionApi.scan", apiData, function(v) {
        let ssddd = JSON.parse(v);

        let returndata = ssddd.data.path;
        // alert("returndata:"+returndata)

        // alert("this:"+that.src1)
        
        
      });
  }

  }

}
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
.info-area {
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  width: 347px;
  height: 256px;
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 10px;
  background: linear-gradient(97deg, #00c7ff 0%, #2296ff 100%);
  box-shadow: 0px 0px 12px 0px #dedede;
  border-radius: 4px;
  p {
    margin-bottom: 10px;
  }
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
  margin-top: 20px;
}
.shoot-area {
  margin-top: 20px;
}
.ele-num {
  display: flex;
  border-radius: 4px;
  box-shadow: #afabab 0px 0px 10px;
  overflow: hidden;
  margin-top: 20px;
  .left-icon {
    background: #1f9aff;
    width: 60px;
    height: 60px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 17px;
  }
  .right-content {
    padding-top: 20px;
    text-align: center;
    width: 72.267vw;
    color: #1f99ff;
    font-weight: 600;
  }
}
.button-style {
  // position: absolute;
  margin-top: 60px;
  bottom: 0;
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