<template>
    <div class="index-map">
        <div class="index-map-left">
            <el-row class="tac" @click="elrow()">
                <el-col :span="24">
                    <el-menu
                    unique-opened
                    router
                    default-active="1"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    class="el-menu-vertical-demo">
                        <el-menu-item index="1">
                            <i class="el-icon-setting"></i>
                            <span slot="title">综合分析</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-setting"></i>
                            <span slot="title">瓦斯监测联网</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">井下人员定位联网</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">水文监测联网</span>
                        </el-menu-item>
                        <el-menu-item index="5">
                            <i class="el-icon-setting"></i>
                            <span slot="title">煤矿产能监测</span>
                        </el-menu-item>
                        <el-menu-item index="6">
                            <i class="el-icon-setting"></i>
                            <span slot="title">矿震和地应力联网</span>
                        </el-menu-item>
                        <el-menu-item index="7">
                            <i class="el-icon-setting"></i>
                            <span slot="title">安全检查应急管理</span>
                        </el-menu-item>
                        <el-menu-item index="8">
                            <i class="el-icon-setting"></i>
                            <span slot="title">工业视频远程巡查</span>
                        </el-menu-item>
                        <!-- <el-menu-item v-for="item in navs" :index="item.inmath">
                            <i class="el-icon-setting"></i>
                            <span slot="title">{{item.name}}</span>
                        </el-menu-item> -->
                        <a href="http://192.168.14.34:8081/#/" target="_blant">
                            <el-menu-item index="9">
                                <i class="el-icon-setting"></i>
                                <span slot="title">进入大屏</span>
                            </el-menu-item>
                        </a>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="index-map-right">
            <div class="right-cont">

                <router-view/>
            </div>
            <div class="right-foot">
                <button>
                    Copyright © 2018-2019 临汾市煤炭工业厅. 保留所有权利. <span>承建单位:<a href="http://www.sxygsj.com/" target="_blank">山西阳光三极科技股份有限公司</a> | 版本1.0.0</span>
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.index-map{
    width: 100%;
    height: 100%;
}
.index-map .index-map-left{
    width: 10%;
    height: 100%;
    background: #545c64;
    float: left;
    overflow: hidden;
    z-index: 99;
}
.index-map .index-map-right{
    width: 90%;
    height: 100%;
    float: right;
}
.index-map .index-map-right .right-cont{
    width: 100%;
    height: 97%;
    overflow: auto;
}
.right-foot{
    width: 100%;
    height: 3%;
}
.right-foot button{
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    border:0px;
    outline: none;
    color: #333;
    font-weight: 600;
}
.right-foot button span{
    float: right;
    margin-right: 10px;
}
.right-foot button span a{
    color: #333;
    font-weight: 600;
}
.el-menu{
    border-right: 0px !important;
}
.el-menu-item{
    padding: 0 5px !important;
}
a{
    color: #fff;
}
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            navs:[
                {name:"综合分析",inmath:'1'},
                {name:"瓦斯监测联网",inmath:'2'},
                {name:"井下人员定位联网",inmath:'3'},
                {name:"水文监测联网",inmath:'4'},
                {name:"煤矿产能监测",inmath:'5'},
                {name:"矿震和地应力联网",inmath:'6'},
                {name:"安全检查应急管理",inmath:'7'},
                {name:"工业视频远程巡查",inmath:'8'},
            ]
        }
    },
     mounted(){
        axios.get(this.$store.state.url+'iGlobe/list', {

        })
        .then((response)=>{
            console.log(response);
            this.aaa=response.data
            this.$store.state.marker=response.data;
        })
        .catch((response)=> {
            console.log(response);
        });
    }
}
</script>


