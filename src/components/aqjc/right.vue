<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>专家数区域分布(单位/人)</button>
            </div>
            <div class="div-foot" id="aqjc-rightone"></div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>救援队伍建制统计(单位/支)</button>
            </div>
            <div class="div-foot" id="aqjc-righttwo"></div>
        </div>
    </div>
</template>
<style>
    #aqjc-right .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #aqjc-right .div:first-child{
        height: 64%;
    }
    #aqjc-right .div:first-child .div-head{
      width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #aqjc-right .div:first-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #aqjc-right .div:first-child .div-foot{
        width: 100%;
        height: 92%;
    }
    #aqjc-right .div:last-child{
        height: 33%;
    }
    #aqjc-right .div:last-child .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #aqjc-right .div:last-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #aqjc-right .div:last-child .div-foot{
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
        aqjcrightchart:function(){
            var rightone = this.$echarts.init(document.getElementById('aqjc-rightone'))
            var righttwo = this.$echarts.init(document.getElementById('aqjc-righttwo'))
           rightone.setOption({
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
                        name: '专家人数',
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
                    data:['大队', '独立中队'],
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
                        { value: 19, name: '大队', },
                        { value: 26, name: '独立中队' },
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
        }
    },
    mounted(){

    }
}
</script>

