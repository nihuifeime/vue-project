<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>井下人数分布(单位/人)</button>
            </div>
            <div class="div-foot" id="jxry-rightone"></div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>传输状态统计</button>
            </div>
            <div class="div-foot" id="jxry-righttwo"></div>
        </div>
    </div>
</template>
<style>
    #jxry-right .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #jxry-right .div:first-child{
        height: 64%;
    }
    #jxry-right .div:first-child .div-head{
      width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #jxry-right .div:first-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #jxry-right .div:first-child .div-foot{
        width: 100%;
        height: 92%;
    }
    #jxry-right .div:last-child{
        height: 33%;
    }
    #jxry-right .div:last-child .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #jxry-right .div:last-child .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #jxry-right .div:last-child .div-foot{
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
        jxryrightchart:function(){
            var rightone = this.$echarts.init(document.getElementById('jxry-rightone'))
            var righttwo = this.$echarts.init(document.getElementById('jxry-righttwo'))
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
                        data: [100, 226, 339, 356, 358, 0, 0,0,0,688]
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
                    data:['正常', '异常', '未联网'],
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
                        { value: 31, name: '正常', },
                        { value: 819, name: '异常' },
                        { value: 67, name: '未联网' },
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


