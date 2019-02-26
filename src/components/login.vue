<template>
    <div id="login">
        <div class="login">
            <div class="canvaszz"> 
               <button>
                    <span>山西煤矿安全监察局煤矿事故风险分析平台</span><br><br>
SHANXI ADMINISTRATION OF COAL MINE SAFETY ACCIDENT RISK ANALYSIS PLATFORM    
               </button>
            </div>   
            <div class="login-user">
                <div class="user-input">
                    <div>
                        <label>用户名 :</label><br>
                        <input type="text" placeholder="请输入用户名" v-model.trim="username">
                    </div>
                    <div>
                        <label>密码 :</label><br>
                        <input type="password" placeholder="请输入密码" v-model.trim="password">
                    </div>
                    <div>
                        <br>
                        <router-link to="/index">
                            <button @click='login()'>
                                登录
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <canvas id="canvas"></canvas>
    </div>
</template>
<style scoped>
    #login{
        width: 100%;
        height: 100%;
        min-width: 1200px;
    }
    .login{
        width: 100%;
        height: 100%;
        position: absolute;
    }
    .login-user{
        width: 25%;
        height: 35%;
        position: relative;
        top: 42.5%;
        left: 37.5%;
        /* border: 1px solid #000; */
        /* box-shadow: 0px 0px 5px 1px #d4d4d7; */
        border-radius: 5px;
        transition: 0.5s;
        z-index: 99;
    }
    .login-user:hover{
        box-shadow: 0px 0px 7px 2px #d4d4d7;
    }
    .user-input{
        width: 70%;
        margin-left: 15%;
        height: 100%;
    }
   .user-input div{
        width: 100%;
        padding-top: 13%;
        height: 13%;
    }
    .user-input label{
        font-size: 15px;
        color: #d4d4d7;
        font-weight: 600;
    }
   .user-input input{
        width: 100%;
        height: 90%;
        border-radius: 5px;
        border: 1px solid #d4d4d7;
        padding-left: 10px;
        font-size: 15px;
        margin-top: 5px;
        background: rgba(255, 255, 255, 0);
        color: #d4d4d7;
    }
    .user-input button{
        width: 102%;
        height: 100%;
        background:rgba(255, 255, 255, 0.1);
        color: #fff;
        font-weight: 600;
        border: 1px solid #fff;
        border-radius: 3px;
    }
    .user-input button:hover{
        background:rgba(255, 255, 255, 0.3);
    }
    #canvas{
        width: 100%;
        height: 100%;
    }
    .canvaszz{
        width:100%;
        /* background-image: url(../assets/img/in_top_bj.jpg); */
        height:50%;
        position:absolute;
        z-index:10;
        filter:alpha(opacity=40);  
        /* -moz-opacity:0.4;  
        -khtml-opacity: 0.4;   */
        /* opacity: 0.4; */
    }
    .canvaszz button{
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0);
        border:0px;
        outline: none;
        color: #fff;
        font-size: 17.5px;
    }
    .canvaszz button span{
        font-size: 40px;
    }
</style>

<script>
import {sunnnn} from '../assets/js/login.js' 
import axios from 'axios'
import store from '@/store'
import { mapState } from 'vuex'


export default {
    data(){
        return{
            username:"临汾市",
            password:"123456"
        }
    },
    methods:{
        canvas(){
            sunnnn()
        },
        login(){
            this.$store.state.diqu=this.username
            this.$store.state.wheretitle=this.username
        }
    },
    mounted(){
        this.canvas()
      
    },
}
</script>

