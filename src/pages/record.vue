<template>
  <div class="page-wrap">
    <!-- <div class="head-title">
      <van-icon class="return-icon" name="arrow-left" @click="prev()" />订单列表
    </div> -->
    <van-tabs v-model="active">
      <van-tab title="全部" name="a">
        <div class="item-wrap">
          <div class="item">
            <span class="status">未完成</span>
            <van-cell title="订单号：" value="MTC20193890291881" />
            <van-cell title="时间：" value="2019/09/09 09:30:57" />
            <van-cell title="申请人：" value="张三" />
          </div>
        </div>
      </van-tab>
      <van-tab title="未完成" name="b">内容 2</van-tab>
      <van-tab title="已完成" name="c">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'a'
    }
  },
  methods: {
    prev() {
      this.$router.go(-1)
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
.item-wrap {
  padding: 10px;
}
.item {
  position: relative;
  box-shadow: #d8d8d8 0px 0px 10px;
  .van-cell__title {
    width: 70px;
    flex: initial;
    -webkit-box-flex: inherit;
  }
  .van-cell__value {
    text-align: left;
  }
  .van-cell:not(:last-child)::after{
      border:none
  }
}
.status {
  position: absolute;
  right: 10px;
  z-index: 99;
  top: 8px;
  color:#f78f0e
}
</style>