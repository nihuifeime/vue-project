<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>月报警区域分布区域分布(单位/次)</button>
            </div>
            <div class="div-foot" id="wsjc-rightone"></div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>矿井瓦斯等级统计</button>
            </div>
            <div class="div-foot" id="wsjc-righttwo"></div>
        </div>
    </div>
</template>
<style>
    #wsjc-right .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #wsjc-right .div:first-child{
        height: 64%;
    }
    #wsjc-right .div:first-child .div-head{
      width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #wsjc-right .div:first-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #wsjc-right .div:first-child .div-foot{
        width: 100%;
        height: 92%;
    }
    #wsjc-right .div:last-child{
        height: 33%;
    }
    #wsjc-right .div:last-child .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #wsjc-right .div:last-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #wsjc-right .div:last-child .div-foot{
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
        wsjcrightchart:function(){
            var rightone = this.$echarts.init(document.getElementById('wsjc-rightone'))
            var righttwo = this.$echarts.init(document.getElementById('wsjc-righttwo'))
            rightone.setOption({
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
                    min:'-1',
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
                    data: ['临汾监察分局','吕梁监察分局','晋中监察分局','晋城监察分局','长治监察分局','大同监察分局','忻州监察站','太原监察分局','朔州监察站','阳泉监察分局'],

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
                        data: [1, 2, 3, 4, 5, 6, 7,8,9,10]
                    }
                ]
            });
            righttwo.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    y: 'top',
                    x: 'left',
                    data:['突出矿井', '高瓦斯矿井', '低瓦斯矿井', '待定', '未知'],
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
                        { value: 41, name: '突出矿井', },
                        { value: 212, name: '高瓦斯矿井' },
                        { value: 577, name: '低瓦斯矿井' },
                        { value: 4, name: '待定' },
                        { value: 98, name: '未知' }
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

