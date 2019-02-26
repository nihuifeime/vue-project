<template>
    <div>
        <div class="serch">
            <label>年</label><select><option>2019</option></select>
            <label>月</label><select><option>一月</option></select>
            <input type="button" value="确定">
        </div>
        <div class="div divv">
            
            <div class="div-head">
                <button>月报警持续时间统计(单位/次)</button>
            </div>
            <div class="div-foot" id="wsjc-leftone"></div>
        </div>
        <div class="div divvv">
            <div class="div-head">
                <button>甲烷月报警监测值范围统计(单位/次)</button>
            </div>
            <div class="div-foot"  id="wsjc-lefttwo"></div>
        </div>
    </div>
</template>
<style> 
    #wsjc-left .serch{
        width: 100%;
        height: 5%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
        text-align: center;
    }
    #wsjc-left .serch select{
        width: 25%;
        height: 80%;
        margin-top: 1%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #wsjc-left .serch label{
        color: #fff;
        font-weight: 600;
    }
    #wsjc-left .serch input{
        width: 30%;
        height: 80%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #wsjc-left .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #wsjc-left .divv{
        height: 58%;
    }
    #wsjc-left .divv .div-head{
        width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #wsjc-left .divv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #wsjc-left .divv .div-foot{
        width: 100%;
        height: 92%;
    }
    #wsjc-left .divvv{
        height: 33%;
    }
    #wsjc-left .divvv .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #wsjc-left .divvv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #wsjc-left .divvv .div-foot{
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
        wsjcleftchart:function(){
            var leftone = this.$echarts.init(document.getElementById('wsjc-leftone'))
            var lefttwo = this.$echarts.init(document.getElementById('wsjc-lefttwo'))
            leftone.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    x: 'center',
                    y:'top',
                    data:['<2分钟','2-6分钟','≥6分钟'],
                    textStyle:{
                        color:'#fff',
                        fontWeight: 600
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['甲烷', '一氧化碳', '温度', '风速', '主扇'],
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
                        name: '<2分钟',
                        type: 'bar',
                        barGap: 0,
                        data: [320, 332, 301, 334, 390]
                    },
                    {
                        name: '2-6分钟',
                        type: 'bar',
                        data: [220, 182, 191, 234, 290]
                    },
                    {
                        name: '≥6分钟',
                        type: 'bar',
                        data: [150, 232, 201, 154, 190]
                    },
                ]
            });
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
                        data : ['小于1%', '1%-1.5%	', '1.5%-3%', '3%以上'],
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
                        data: [320, 332, 301, 334]
                    }
                ]
            });
        }
    },
    mounted(){

    }
}
</script>


