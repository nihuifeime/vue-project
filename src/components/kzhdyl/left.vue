<template>
    <div>
        <div class="serch">
            <label>年</label><select><option>2019</option></select>
            <label>月</label><select><option>一月</option></select>
            <input type="button" value="确定">
        </div>
        <div class="div divv">
            
            <div class="div-head">
                <button>地应力报警分析(单位/次)</button>
            </div>
            <div class="div-foot" id="kzhdyl-leftone"></div>
        </div>
        <div class="div divvv">
            <div class="div-head">
                <button>微震能量统计分析(单位/次)</button>
            </div>
            <div class="div-foot" id="kzhdyl-lefttwo"></div>
        </div>
    </div>
</template>
<style>
    #kzhdyl-left .serch{
        width: 100%;
        height: 5%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
        text-align: center;
    }
    #kzhdyl-left .serch select{
        width: 25%;
        height: 80%;
        margin-top: 1%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #kzhdyl-left .serch label{
        color: #fff;
        font-weight: 600;
    }
    #kzhdyl-left .serch input{
        width: 30%;
        height: 80%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #kzhdyl-left .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #kzhdyl-left .divv{
        height: 58%;
    }
    #kzhdyl-left .divv .div-head{
        width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #kzhdyl-left .divv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #kzhdyl-left .divv .div-foot{
        width: 100%;
        height: 92%;
    }
    #kzhdyl-left .divvv{
        height: 33%;
    }
    #kzhdyl-left .divvv .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #kzhdyl-left .divvv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #kzhdyl-left .divvv .div-foot{
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
        kzhdylleftchart:function(){
            var leftone = this.$echarts.init(document.getElementById('kzhdyl-leftone'))
            var lefttwo = this.$echarts.init(document.getElementById('kzhdyl-lefttwo'))
            leftone.setOption({
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
                        name: '<2min',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [320, 302,220,280,160,250,360,266,360,270]
                    },
                    {
                        name: '2-6min',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [120, 132,200,120, 132,300,280,266,360,270]
                    },
                    {
                        name: '≥6min',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data:  [120, 132,300,280,160,250,360,266,360,270]
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
                        data : ['<10⁵J/日', '10⁵J-10⁶J/日','≥10⁷J/日'],
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
