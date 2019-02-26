<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>专家数按类型分析(单位/次)</button>
            </div>
            <div class="div-foot" id="mkcn-child-rightone">

            </div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>在线巡查</button>
            </div>
            <div class="div-foot"  id="mkcn-child-righttwo"></div>
        </div>
         <div class="div">
            <div class="div-head">
                <button>煤矿基本信息</button>
            </div>
            <div class="div-foot"  id="mkcn-child-rightthree">
                瓦斯等级：低瓦斯矿井
                水文地质类型：中等
                冲击地压：无
                安全质量标准化等级：二级
                核定产能/核定人数：60/0
            </div>
        </div>
    </div>
</template>
<style>
    #mkcn-child-right .div{ 
        width: 100%;
        height: 32%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
   #mkcn-child-right .div .div-head{
        width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-child-right .div .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-child-right .div .div-foot{
        width: 100%;
        height: 85%;
    }
</style>
<script>
import store from "../../store"
export default {
    data(){
        return{

        }
    },
    methods:{
        mkcnchildrightchart1:function(){
            var rightone = this.$echarts.init(document.getElementById('mkcn-child-rightone'))
            rightone.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    // orient: 'vertical',
                    // top: 'middle',
                    bottom: 10,
                    left: 'center',
                    data:['复杂', '中等', '简单', '未鉴定'],
                    textStyle:{
                        color:'#fff',
                        fontWeight: 600
                    }
                },
                series: [{
                    type: 'pie',
                    radius: ['10%', '50%'],
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    data:[
                        { value: 31, name: '复杂', },
                        { value: 89, name: '中等' },
                        { value: 67, name: '简单' },
                        { value: 15, name: '未鉴定' },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            })
        },
        mkcnchildrightchart2:function(){
            var righttwo = this.$echarts.init(document.getElementById('mkcn-child-righttwo'))
            righttwo.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                    min:'-50',
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
                    data: ['顶板水害','底板水害','老空水窖','断层及陷落柱水害','封闭不良钻孔水害','地表水害'],

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
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [100, 226, 339, 356, 358, 0]
                    }
                ]
            })
        },
    },
    mounted(){
        
    }
}
</script>
