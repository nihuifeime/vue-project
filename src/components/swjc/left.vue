<template>
    <div>
        <div class="serch">
            <label>年</label><select><option>2019</option></select>
            <label>月</label><select><option>一月</option></select>
            <input type="button" value="确定">
        </div>
        <div class="div divv">
            
            <div class="div-head">
                <button>涌水量,排水区域统计(㎡/n)</button>
            </div>
            <div class="div-foot" id="swjc-leftone">

            </div>
        </div>
        <div class="div divvv">
            <div class="div-head">
                <button>月探水次数(单位/次)</button>
            </div>
            <div class="div-foot"  id="swjc-lefttwo">

            </div>
        </div>
    </div>
</template>
<style>
    #swjc-left .serch{ 
        width: 100%;
        height: 5%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
        text-align: center;
    }
    #swjc-left .serch select{
        width: 25%;
        height: 80%;
        margin-top: 1%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #swjc-left .serch label{
        color: #fff;
        font-weight: 600;
    }
    #swjc-left .serch input{
        width: 30%;
        height: 80%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #swjc-left .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #swjc-left .divv{
        height: 58%;
    }
    #swjc-left .divv .div-head{
        width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #swjc-left .divv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #swjc-left .divv .div-foot{
        width: 100%;
        height: 92%;
    }
    #swjc-left .divvv{
        height: 33%;
    }
    #swjc-left .divvv .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #swjc-left .divvv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #swjc-left .divvv .div-foot{
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
        swjcleftchart:function(){
            var leftone = this.$echarts.init(document.getElementById('swjc-leftone'))
            var lefttwo = this.$echarts.init(document.getElementById('swjc-lefttwo'))
            leftone.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['涌水量','排水量'],
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
                        name: '涌水量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [320, 302,300,280,160,250,360,270,310,266]
                    },
                    {
                        name: '排水量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [120, 132,300,280,160,250,360,266,360,270]
                    }
                ]
            }),
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
                        data : ['少于4次', '4到6次', '大于6次'],
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
                        data: [320, 332, 301]
                    }
                ]
            })
        }
    },
    mounted(){
        
    }
}
</script>
