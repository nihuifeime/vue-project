<template>
    <div>
        <div class="div divv">
            
            <div class="div-head">
                <button>接入视频分布单位(单位/座)</button>
            </div>
            <div class="div-foot" id="gysp-leftone"></div>
        </div>
        <div class="div divvv">
            <div class="div-head">
                <button>重点关注煤矿</button>
            </div>
            <div class="div-foot">
                <el-checkbox-group 
                    v-model="checkedCities1" @change="checkchange()">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>
<style>
    #gysp-left .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #gysp-left .divv{
        height: 65%;
    }
    #gysp-left .divv .div-head{
        width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #gysp-left .divv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #gysp-left .divv .div-foot{
        width: 100%;
        height: 92%;
    }
    #gysp-left .divvv{
        height: 33%;
    }
    #gysp-left .divvv .div-head{
        width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #gysp-left .divvv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #gysp-left .divvv .div-foot{
        width: 100%;
        height: 85%;
        /* background: rgba(255,255,255,0.8); */
    }
    #gysp-left .divvv .div-foot .group{
        width: 100%;
        height: 100%;
    }
    .el-checkbox+.el-checkbox{
        margin-left: 10%;
    }
    .el-checkbox{
        display: block;   
        color: #fff;
        padding-top: 5% ;
        margin-left: 10%;
    }
</style>

<script>
import store from '../../store'
export default {
    data(){
        return{
            checkedCities1: [],
            cities: ['重点煤矿巡查', '高瓦斯煤矿巡查','隐患严重煤矿巡查','水害严重煤矿巡查','皮带头巡查']
        }
    },
    methods:{
        gyspleftchart:function(){
            var leftone = this.$echarts.init(document.getElementById('gysp-leftone'))
            leftone.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['<2min','2-6min','≥6min'],
                    textStyle:{
                        color:'#fff',
                        fontWeight: 600
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    min:-50,
                    nameTextStyle: {
                        color: "#fff",
                        fontWeight: 600
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data:['临汾监察分局','吕梁监察分局','晋中监察分局','晋城监察分局','长治监察分局','大同监察分局','忻州监察站','太原监察分局','朔州监察站','阳泉监察分局'],
                    nameTextStyle: {
                        color: "#fff",
                        fontWeight: 600
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                series: [
                    {
                        name: '接入视频单位',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [120, 132,200,0,0,0,0,0,0,0,]
                    }
                ]
            })
        },
        checkchange:function(){
          console.log(this.checkedCities1)  
        }
    },
    mounted(){
        
    }
}
</script>

