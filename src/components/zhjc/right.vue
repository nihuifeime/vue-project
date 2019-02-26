<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>区域分布(单位/个)</button>
            </div>
            <div class="div-foot" id="zhjc-rightone">

            </div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>冲击地压矿井统计</button>
            </div>
            <div class="div-foot" id="zhjc-righttwo">

            </div>
        </div>
    </div>
</template>
<style>
    #zhjc-right .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #zhjc-right .div:first-child{
        height: 64%;
    }
    #zhjc-right .div:first-child .div-head{
      width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #zhjc-right .div:first-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #zhjc-right .div:first-child .div-foot{
        width: 100%;
        height: 92%;
    }
    #zhjc-right .div:last-child{
        height: 33%;
    }
    #zhjc-right .div:last-child .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #zhjc-right .div:last-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #zhjc-right .div:last-child .div-foot{
        width: 100%;
        height: 85%;
    }
</style>

<script>
import store from '../../store'
export default {
    data(){
        return{

        }
    },
    methods:{
        zhjcrightchart:function(){
            var rightone = this.$echarts.init(document.getElementById('zhjc-rightone'))
            var righttwo = this.$echarts.init(document.getElementById('zhjc-righttwo'))
            rightone.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    // formatter: "{b}:{c}(个)"
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
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
                        data: [320, 302, 301, 334, 390, 330, 320,400,360,310]
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
                    // orient: 'vertical',
                    // top: 'middle',
                    bottom: 10,
                    left: 'center',
                    data:['有', '无'],
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
                        { value: 921, name: '无' },
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
 