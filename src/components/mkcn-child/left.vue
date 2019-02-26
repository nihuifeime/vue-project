<template>
    <div>
        <div class="serch">
            <label>年</label><select><option>2019</option></select>
            <label>月</label><select><option>一月</option></select>
            <input type="button" value="确定">
        </div>
        <div class="div divv">
            
            <div class="div-head">
                <button>月报警持续时间分析(单位/次)</button>
            </div>
            <div class="div-foot" id="mkcn-child-leftone">

            </div>
        </div>
        <div class="div divvv">
            <div class="div-head">
                <button>领导下井时长月统计(单位/次)</button>
            </div>
            <div class="div-foot"  id="mkcn-child-lefttwo">

            </div>
        </div>
    </div>
</template>
<style>
    #mkcn-child-left .serch{ 
        width: 100%;
        height: 5%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
        text-align: center;
    }
    #mkcn-child-left .serch select{
        width: 25%;
        height: 80%;
        margin-top: 1%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #mkcn-child-left .serch label{
        color: #fff;
        font-weight: 600;
    }
    #mkcn-child-left .serch input{
        width: 30%;
        height: 80%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #mkcn-child-left .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #mkcn-child-left .divv{
        height: 58%;
    }
    #mkcn-child-left .divv .div-head{
        width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-child-left .divv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-child-left .divv .div-foot{
        width: 100%;
        height: 92%;
    }
    #mkcn-child-left .divvv{
        height: 33%;
    }
    #mkcn-child-left .divvv .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-child-left .divvv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-child-left .divvv .div-foot{
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
        mkcnchildleftchart1:function(){
            var leftone = this.$echarts.init(document.getElementById('mkcn-child-leftone'))
            leftone.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['主扇','一氧化碳','甲烷','温度','风速'],
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
                    data:['<2分钟','2-6分钟','≥6分钟'],
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
                        name: '主扇',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0.1, 0.5,0.7]
                    },
                    {
                        name: '一氧化碳',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0.3, 0.7,0.8]
                    }
                    ,
                    {
                        name: '甲烷',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0.1, 0.2,0.7]
                    }
                    ,
                    {
                        name: '温度',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0.5, 0.4,0.8]
                    }
                    ,
                    {
                        name: '风速',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [0.2, 0.6,1]
                    }
                ]
            })
        },
        mkcnchildleftchart2:function(){
            var lefttwo = this.$echarts.init(document.getElementById('mkcn-child-lefttwo'))
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
                        data : ['不足3h', '不足6h', '不足8h','不足8h'],
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
                        data: [320, 332, 301,280]
                    }
                ]
            })
        }
    },
    mounted(){
        
    }
}
</script>
