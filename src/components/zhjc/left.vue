<template>
    <div>
        <div class="div">
            <div class="div-head">
                <button>区域安全综合风险分析</button>
            </div>
            <div class="div-foot" id="zhjc-leftone">

            </div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>矿井瓦斯等级统计</button>
            </div>
            <div class="div-foot" id="zhjc-lefttwo">

            </div>
        </div>
        <div class="div">
            <div class="div-head">
                <button>水文地质类型矿井统计</button>
            </div>
            <div class="div-foot" id="zhjc-leftthree">
                
            </div>
        </div>
    </div>
</template>
<style>
    #zhjc-left .div{
        width: 100%;
        height: 32%;;
        margin-top: 2%;
        background: rgba(14,48,96,0.5); 
        border-radius: 5px;
    }
    
    #zhjc-left .div .div-head{
        width: 100%;
        height: 15%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #zhjc-left .div .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        text-align: left;
        padding-left: 10px;
    }
    #zhjc-left .div .div-foot{
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
        zhjcleftchart:function(){
            var leftone = this.$echarts.init(document.getElementById('zhjc-leftone'))
            var lefttwo = this.$echarts.init(document.getElementById('zhjc-lefttwo'))
            var leftthree = this.$echarts.init(document.getElementById('zhjc-leftthree'))
            leftone.setOption({
                title: {
                    text:'风险等级较高',
                    x:'center',
                    y:'bottom',
                    textStyle: {
                        color: '#fff',
                    }
                },
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}"
                },
                series: [
                    {
                        name: '风险值',
                        type: 'gauge',
                        detail: {
                            formatter:'{value}'
                        },
                        data: [
                            {value: 88},
                        ]
                    }
                ]
            });
            lefttwo.setOption({
                color:['#0074FD',"#01BDFF" ,"#f45b5b","gold","orange"],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    bottom: 10,
                    left: 'center',
                    data: ['突出矿井', '高瓦斯矿井', '低瓦斯矿井', '待定', '未知'],
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
                        { value: 634, name: '待定' },
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
            });
            leftthree.setOption({
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
                    data:['复杂', '中等', '简单', '未鉴定'],
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
                        { value: 31, name: '复杂', },
                        { value: 819, name: '中等' },
                        { value: 67, name: '简单' },
                        { value: 15, name: '未鉴定' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
        }
    },
    mounted(){
        
    }
}
</script> 


