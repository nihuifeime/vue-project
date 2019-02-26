<template>
    <div>
        <div class="serch">
            <label>年</label><select><option>2019</option></select>
            <input type="button" value="确定">
        </div>
        <div class="div divv">
            
            <div class="div-head">
                <button>年产量区域分布(单位/吨)</button>
            </div>
            <div class="div-foot" id="mkcn-leftone"></div>
        </div>
        <div class="div divvv">
            <div class="div-head">
                <button>传输状态</button>
            </div>
            <div class="div-foot" id="mkcn-lefttwo"></div>
        </div>
    </div>
</template> 
<style>
    #mkcn-left .serch{
        width: 100%;
        height: 5%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
        text-align: center;
    }
    #mkcn-left .serch select{
        width: 25%;
        height: 80%;
        margin-top: 1%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #mkcn-left .serch label{
        color: #fff;
        font-weight: 600;
    }
    #mkcn-left .serch input{
        width: 30%;
        height: 80%;
        background: rgba(14,48,96,0.5);
        color: #fff;
        border: 1px solid #fff;
    }
    #mkcn-left .div{
        width: 100%;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    #mkcn-left .divv{
        height: 58%;
    }
    #mkcn-left .divv .div-head{
        width: 100%;
        height: 8%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-left .divv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-left .divv .div-foot{
        width: 100%;
        height: 92%;
    }
    #mkcn-left .divvv{
        height: 33%;
    }
    #mkcn-left .divvv .div-head{
      width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-left .divvv .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-left .divvv .div-foot{
        width: 100%;
        height: 85%;
    }
</style>
<script>
import store from "../../store"

import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    methods:{

        mkcnclefthart1:function(a,b){
            var aa = this.$echarts.init(document.getElementById('mkcn-leftone'))
            aa.setOption({
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
                xAxis:{
                    type: 'value',
                    minInterval: 500000,
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
                    //data:['临汾监察分局辖区','吕梁监察分局辖区','晋中监察分局辖区','晋城监察分局辖区','长治监察分局辖区','大同监察分局辖区','忻州监察站辖区','太原监察分局辖区','朔州监察站辖区','阳泉监察分局辖区'],
                    data:b,
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
                        name: '产量',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle: { //数值样式
										color: '#fff',
										fontSize: 13
									}
                            }
                        },
                        data:a
                    }
                ]
            })
            aa.on('click', (params) => {
                //this.$emit('childByValue',params.name)//子页面向父页面传值
                // this.$store.state.mkcnchild=params.name
                // this.$router.push("mkcnleftone")
                axios.get(this.$store.state.url+'iApcapacity/list', {
                
                })
                .then((response)=>{
                    if(params.name!="央企监管中心"){
                        for(var i=0;i<response.data.length;i++){
                            if(params.name==response.data[i].cityname){
                                this.$router.push({
                                    path: 'mkcnleftone',
                                    query: {
                                        id: params.name,
                                        lnt: response.data[i].lnt,
                                        lat: response.data[i].lat,
                                    }
                                })
                            }
                        }
                    }
                })
                .catch((response)=> {
                    console.log(response);
                });



                
            });
        },
        mkcnclefthart2:function(c){
            var bb=  this.$echarts.init(document.getElementById('mkcn-lefttwo'))
            bb.setOption({
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
                    data:['传输正常', '传输异常', '未联网'],
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
                        { value: c[0].zc, name: '传输正常', },
                        { value: c[0].yc, name: '传输异常' },
                        { value: c[0].wlw, name: '未联网' },
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
            bb.on('click', (params) => {
                //this.$emit('childByValue',params.name)//子页面向父页面传值
                // this.$store.state.mkcnchild=params.name
                
                axios.get(this.$store.state.url+'iList/list', {
                    
                })
                .then((response)=>{
                    this.$router.push({
                        path: 'mkcnlefttwo',
                        query: {
                            data: response.data,
                        }
                    }) 
                    console.log(response.data)
                })
                .catch((response)=> {
                    console.log(response);
                });
                
            });
        }
    },
    mounted(){
        
    }
}
</script>

