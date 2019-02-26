<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>冲击地压矿井统计</button>
            </div>
            <div class="div-foot" id="kzhdyl-rightone"></div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>水文地质类型矿井统计(座)</button>
            </div>
            <div class="div-foot" id="kzhdyl-righttwo"></div>
        </div>
         <div class="div">
            <div class="div-head">
                <button>微震频次统计分析(单位/次)</button>
            </div>
            <div class="div-foot" id="kzhdyl-rightthree"></div>
        </div>
    </div>
</template>
<style>
    #kzhdyl-right .div{
        width: 100%;
        height: 32%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
   #kzhdyl-right .div .div-head{
        width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #kzhdyl-right .div .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #kzhdyl-right .div .div-foot{
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
        kzhdylrightchart:function(){
            var rightone = this.$echarts.init(document.getElementById('kzhdyl-rightone'))
            var righttwo = this.$echarts.init(document.getElementById('kzhdyl-righttwo'))
            var rightthree = this.$echarts.init(document.getElementById('kzhdyl-rightthree'))
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
                    data:['有', '无', '未知'],
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
                        { value: 11, name: '有', },
                        { value: 902, name: '无' },
                        { value: 19, name: '未知' },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            }),
            righttwo.setOption({
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
                    data:['复杂', '中等', '简单','未知'],
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
                        { value: 819, name: '中等' },
                        { value: 31, name: '简单' },
                        { value: 15, name: '未知' },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            }),
            rightthree.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['<300次/日', '300-500次/日','≥500次/日'],
                        axisTick: {
                            alignWithLabel: true
                        },
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
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
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
                    }
                ],
                series : [
                    {
                        type: 'bar',
                        barGap: 0,
                        data: [320, 332,220]
                    }
                ]
            })
        }
    },
    mounted(){
        
    }
}
</script>

