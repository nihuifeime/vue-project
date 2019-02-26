<template>
    <div id="index">
        <div class="index-head">
            <!-- <button>
                <img :src="logoo"> 
                <img :src="titlee">
            </button> -->
            <div class="h-left">
                <button>
                    <img :src="logoo">
                </button>
                <button>
                   {{$store.state.diqu}}煤矿安全监察局煤矿事故风险分析平台
                </button>
            </div>
           
            <div class="div">
                <button v-for="(item,index) in titlenav" :title="item.title" :class="{fcred:index==fcli}" @click="titlebtn(index,item)">
                    <i :class="item.name"></i>
                </button>
                <button>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            admin<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <router-link to="/login">
                                <el-dropdown-item>退出登录</el-dropdown-item>
                            </router-link> 
                        </el-dropdown-menu>
                    </el-dropdown>
                </button>
            </div>
            
        </div>
        <div class="index-cont">
             <router-view/>
        </div>
        
    </div>
</template>
<style scoped>
#index{
    width: 100%;
    height: 100%;
}
.index-head{
    width: 100%;
    height: 7%;
    background: #103261;
}
.index-head button{
    height: 100%;
    background: rgba(255, 255, 255, 0);
    border:0px;
    outline: none;
    text-align: left;
}
.index-head .h-left{
    width: 70%;
    height: 100%;
    float: left;
}
.index-head .h-left button{
    height: 100%;
    background: rgba(255, 255, 255, 0);
    border:0px;
    outline: none;
    text-align: left;
    color: #fff;
    font-weight: 600;
}
.index-head .h-left button:first-child{
    float: left;
}
.index-head .h-left button:last-child{
    font-size: 25px;
    padding-left: 10px;
}
.index-head .div{
    float: right;
    height: 100%;
    width: 30%;
    text-align: right;
}
.index-head .div button{
    background: rgba(0, 0, 0, 0);
    color: #d4d4d7;
    font-weight: 500;
    font-size: 20px;
    margin-right: 5%;
}
.index-head .div button:hover{
    cursor: pointer;
}
.index-head .div .logout{
    width: 100px;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    border:0px;
    /* float: right; */
    color: #d4d4d7 !;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
}
.el-dropdown{
    color: #d4d4d7 !important;
    font-size: 15px;
}
.index-cont{
    width: 100%;
    height: 93%;
}


.fcred{
    color: #f1f1f1 !important;
    text-shadow:0px 0px 25px #fff;
    font-size: 25px !important;
}
</style>
<script>
import logo from '../assets/img/mklogo.png'
import title from '../assets/img/mktitle.png'
import store from './../store'
export default {
    data(){
        return{
            logoo:logo,
            titlee:title,
            titlenav:[
                {"name":"el-icon-location","router":"/index/map","title":"综合分析一张图"},
                {"name":"el-icon-document","router":"/index/table","title":"综合分析一张表"},
                {"name":"el-icon-setting","router":"/index/menhu","title":"集成门户"},
            ],
            fcli:0,
        }
    },
    methods: {
        titlebtn(index,item) {
            this.fcli=index
            this.$router.push(item.router)//跳转路由
        },
    },   
}
</script>

