<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>应急预案分析(单位/个)</button>
            </div>
            <div class="div-foot" id="aqjc-leftone"></div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>专家类型分析(单位/人)</button>
            </div>
            <div class="div-foot" id="aqjc-lefttwo"></div>
        </div>
    </div>
</template>
<style>
    #aqjc-left .div{
        width: 100%;
        height: 49%;;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    
    #aqjc-left .div .div-head{
        width: 100%;
        height: 10%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #aqjc-left .div .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #aqjc-left .div .div-foot{
        width: 100%;
        height: 90%;
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
        aqjcleftchart:function(){
            var leftone = this.$echarts.init(document.getElementById('aqjc-leftone'))
            var lefttwo = this.$echarts.init(document.getElementById('aqjc-lefttwo'))
            leftone.setOption({
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
                    data:['专项预案', '综合预案', '部门预案'],
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
                        { value: 155, name: '专项预案', },
                        { value: 102, name: '综合预案' },
                        { value: 9, name: '部门预案' },
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
            lefttwo.setOption({
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
                        data : ['顶板', '一通三防','水灾','机电','机电运输','火灾','煤尘','瓦斯'],
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
                        data: [320, 332,220,320, 332,220,320, 332]
                    }
                ]
            })
        }
    },
    mounted(){

    }
}
</script>

