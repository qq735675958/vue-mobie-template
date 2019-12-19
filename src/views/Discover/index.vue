<template>
  <div class="discover">
    <van-nav-bar title="发现"
      left-text="返回"
      right-text="按钮"
      left-arrow />
    <div class="head-top">
      <h5>客观 点个菜啊</h5>
    </div>
    <div class="slide-wraper">
      <!--  左侧 -->
      <scroll class="menu-wrapper"
        :listenScroll="listenScroll">
        <ul>
          <li v-for="(item, index) in foodListData"
            :key="index"
            class="item"
            :class="{ active: currentIndex === index }"
            @click="selectMenu(index)">
            <span>{{ item.classTitle }}</span>
          </li>
        </ul>
      </scroll>
      <!-- 右侧 -->
      <scroll class="foods-wrapper"
        ref="foodsWrapper"
        :listenScroll="listenScroll"
        :probeType="probeType"
        @scroll="scroll">
        <div class="foods-box">
          <div class="foodRightList"
            v-for="(item, index) in foodListData"
            :key="index"
            ref="fooditems"
            :data-index="index">
            <p class="footTitle ft16">{{ item.classTitle }}</p>
            <dl class="foodsUl"
              v-for="(subItem, subkey) in item.foodlList"
              :key="subkey">
              <dt class="foodimg">
                <img :src="subItem.foodimg"
                  alt="img" />
              </dt>
              <dd class="fooddes">
                <div class="foodName ft14 ">{{ subItem.subClassName }}</div>
                <div class="foodnum ft12">{{ subItem.foodsell }}</div>
                <div class="foodprice ft12">
                  今日已售 {{ subItem.foosellnum }}份
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import scroll from "@/components/scroll";
import { getlistData } from "@/api";
import { Toast } from "vant";
export default {
  name: "discover",
  components: {
    scroll
  },
  data() {
    return {
      listenScroll: false,
      currentIndex: 0,
      probeType: 1,
      foodListData: [],
      itemHeight: [],
      offset: 0,
      scrolly: -1
    };
  },
  created() {
    this.listenScroll = true;
    this.probeType = 2;
    this.itemHeight = [0];
    this.$nextTick(() => {
      this.getmeauListData();
    });
  },
  updated() {
    this._heightArr();
  },
  methods: {
    selectMenu(index) {
      this.currentIndex = index;
      let foodsEle = this.$el.getElementsByClassName("foodRightList")[index];
      this.$refs.foodsWrapper.scrollToElement(foodsEle, 400);
    },
    getmeauListData() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      getlistData()
        .then(res => {
          if (res.status == 200) {
            this.foodListData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          Toast.clear();
        });
    },
    scroll(pos) {
      this.scrolly = pos.y;
    },
    _heightArr() {
      let h = 0;
      let list = this.$refs.fooditems;
      list.forEach((item, i) => {
        h += list[i].clientHeight;
        this.itemHeight.push(h);
      });
    }
  },
  watch: {
    scrolly(newy) {
      if (newy >= 0) this.currentIndex = 0;
      let itemHeight = this.itemHeight;
      for (let i = 0; i < itemHeight.length - 1; i++) {
        let h1 = itemHeight[i];
        let h2 = itemHeight[i + 1];
        if (-newy >= h1 && -newy < h2) {
          this.currentIndex = i;
          return;
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.ft12 {
  font-size: 12px;
}
.ft14 {
  font-size: 14px;
}
.ft16 {
  font-size: 16px;
}

.head-top {
  height: 100px;
  background: rgba(7, 17, 27, 0.5);
}

.slide-wraper {
  display: flex;
  position: absolute;
  top: 146px;
  bottom: 50px;
  overflow: hidden;
  .menu-wrapper {
    width: 100px;
    height: 100%;
    border-right: 1px solid eee;
    background: #e8e9e8;
    // box-shadow: 6px 0px 8px #ccc;
    .item {
      padding: 5px 0;
      color: #666;
      span {
        display: block;
        text-align: center;
        font-size: 14px;
      }
      &.active {
        color: #3cb963;
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 3px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: #3cb963;
        }
      }
    }
  }
  .foods-wrapper {
    .foods-box {
      .footTitle {
        padding-left: 8px;
        background: #e8e9e8;
      }
      .foodsUl {
        padding: 5px 0 5px 10px;
        display: flex;
        justify-content: start;
        align-items: center;
        .foodimg {
          padding-right: 10px;
          img {
            width: 80px;
            height: 70px;
          }
        }
      }
    }
  }
}
</style>
