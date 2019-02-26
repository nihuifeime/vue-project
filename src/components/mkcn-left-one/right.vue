vue
<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>超产煤矿占比</button>
            </div>
            <div class="div-foot" id="mkcn-rightone"></div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>年产量构成(座)</button>
            </div>
            <div class="div-foot" id="mkcn-righttwo"></div>
        </div>
         <div class="div">
            <div class="div-head">
                <button>铁路运销统计(万吨)</button>
            </div>
            <div class="div-foot" id="mkcn-rightthree"></div>
        </div>
    </div>    
</template>
<style>
    #mkcn-left-one-right .div{
        width: 100%;
        height: 32%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
   #mkcn-left-one-right .div .div-head{
        width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-left-one-right .div .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-left-one-right .div .div-foot{
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
        mkcnrightchart1:function(pie){
            // console.log(pie[0].countNc)
            var rightone = this.$echarts.init(document.getElementById('mkcn-rightone'))
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
                    data:['正常', '超产'],
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
                        { value: pie[0].countNc, name: '正常', },
                        { value:pie[0].countCc, name: '超产' },
                    ],
                    itemStyle:{
                        normal:{
                            label:{
                                show: true,
                                formatter: function (params,option) {
                                    if(params.value == 0){
                                        return ''
                                    }
                                },
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    },
                }]
            })
            
            
        },
        mkcnrightchart2:function(){
            var righttwo = this.$echarts.init(document.getElementById('mkcn-righttwo'))
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
                    data:['国有重点', '地方国有','非国有煤矿'],
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
                        { value: 0, name: '国有重点', },
                        { value: 0, name: '地方国有' },
                        { value: 0, name: '非国有煤矿' },
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
        mkcnrightchart3:function(){
            var rightthree = this.$echarts.init(document.getElementById('mkcn-rightthree'))
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
                        data : ['公路运销', '铁路运销'],
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
                        data: [0, 0]
                    }
                ]
            })
        }
    },
    mounted(){
        this.mkcnrightchart2()
        this.mkcnrightchart3()
    }
}
</script>