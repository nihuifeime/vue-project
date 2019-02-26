<template>
  <div class="menhu">
    <canvas id="canvas"></canvas>
    <div class="swiper-container">
      <div class="swiper-wrapper">  
        <div class="swiper-slide slide1">
          <button>煤矿基础数据管理及卫星地图系统</button>
        </div>
        <div class="swiper-slide slide2">
          <button>煤矿瓦斯监测联网分析系统</button>
        </div>
        <div class="swiper-slide slide3">
          <button>煤矿井下作业人员定位联网分析系统</button>
        </div>
        <div class="swiper-slide slide4">
          <button>煤矿安全监察应急管理系统</button>
        </div>
        <div class="swiper-slide slide5">
          <button>煤矿工业视频远程巡查联网系统</button>
        </div>
        <div class="swiper-slide slide6">
          <button>煤矿事故风险大数据分析系统</button> 
        </div>
        <div class="swiper-slide slide7">
          <button>煤矿矿震和地应力联网分析系统</button>
        </div>
        <div class="swiper-slide slide8">
          <button>煤矿水文监测联网分析系统</button>
        </div>
        <div class="swiper-slide slide9">
          <button>煤矿产能监测分析系统</button>
        </div>
        <div class="swiper-slide slide10">
          <button>系统管理</button>
        </div>
      </div>
      <!-- //分页 -->
      <div class="swiper-pagination"></div> 
      <!-- 滚动 -->
      <!-- <div class="swiper-scrollbar"></div> -->
      <!-- 左右切换 -->
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>
  </div>
</template>
<style scoped>
.menhu{
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/in_top_bj.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;   
}
.menhu .swiper-container{
  width: 100%;
  height: 70%;
  position: absolute;
  top: 15%;
}
.swiper-scrollbar {
   height:10px;
   width: 97.5%;
   background:rgba(255, 255,255,0.7);
}
.swiper-slide{
    background: rgba(255, 255,255,0.5);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.swiper-slide button{
    width: 100%;
    height:20%;
    margin-top: 40%;
    background: rgba(0, 0,0,0.8);
    border: 0px;
    outline: none;
    color: #d4d4d7;
    font-size: 30px;
}
.slide1{
    background-image: url("../assets/img/menhu/menhu1.jpg");
}
.slide2{
    background-image: url("../assets/img/menhu/menhu2.jpg");
}
.slide3{
    background-image: url("../assets/img/menhu/menhu3.jpg");
}
.slide4{
    background-image: url("../assets/img/menhu/menhu4.jpg");
}
.slide5{
    background-image: url("../assets/img/menhu/menhu5.jpg");
}
.slide6{
    background-image: url("../assets/img/menhu/menhu6.jpg");
}
.slide7{
    background-image: url("../assets/img/menhu/menhu7.jpg");
}
.slide8{
    background-image: url("../assets/img/menhu/menhu8.jpg");
}
.slide9{
    background-image: url("../assets/img/menhu/menhu9.jpg");
}
.slide10{
    background-image: url("../assets/img/menhu/menhu10.jpg");
}
.swiper-pagination,.swiper-pagination-fraction{
  color: #fff !important;
}
</style>

<script>

import Swiper from 'swiper' 
import 'swiper/dist/css/swiper.min.css';
import {sunnnn} from '../assets/js/login.js'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },    
  methods:{
    canvas(){
        // sunnnn()
    }
  },
  mounted(){
    this.canvas(),
    new Swiper('.swiper-container',{
      autoplay:true,//可选选项，自动滑动
      loop:true,
      speed:1500,
      navigation: {//左右切换
        nextEl: '.next',
        prevEl: '.prev',
      },
      pagination: {//图片分页
        el: '.swiper-pagination',
        type: 'fraction', //样式二 数字
      },
      effect : 'coverflow',
      slidesPerView: 3,
      centeredSlides: true,
      coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows : true
      },
    })
  },
}
</script>

