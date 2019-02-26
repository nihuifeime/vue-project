<template>
    <div id="mkcn-left-one">
        <div id="allmap" ref="allmap">
            
        </div>
        <div  style="position: absolute;z-index:99; top:19%;margin-left:17%;">
            <el-popover
                placement="right"
                width="400"
                trigger="click">
                <el-input v-model="input" placeholder="请输入内容" id="suggestId" style="width:60%;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="theLocation()">搜索</el-button>
                <el-button slot="reference" icon="el-icon-search" circle></el-button>
            </el-popover><br>
            <el-button icon="el-icon-location" circle @click="location()" class="btn"></el-button>
        </div>
        <app-head id="mkcn-left-one-head" ref="headchird"></app-head>
        <app-left id="mkcn-left-one-left" ref="leftchild"></app-left>
        <app-right id="mkcn-left-one-right" ref="rightchild"></app-right>
    </div>
</template> 
<style>
.btn{
        margin-top: 5px;
    }
    #mkcn-left-one{
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    #allmap{
        width: 100%;
        height: 100%;
    }
    #mkcn-left-one-head{
        width: 100%;
        height: 10%;
        position: absolute;
        top: 7%;
        /* background: rgba(14,48,96,0.3); */
        padding: 0.5% 0;
    }
    #mkcn-left-one-left{
        width: 15%;
		height: 78%;
		position: absolute;
        margin-left: 0%;
		top: 19%;
		border: 0px;
        /* background: linear-gradient(to right,rgba(14,48,96,1) 0%,rgba(18,36,56,0) 100%); */
        /* background: rgba(14,48,96,0.3); */
        padding: 0 1%;
    }
    #mkcn-left-one-right{
		width: 15%;
		height: 78%;
		position: absolute;
		left: 83%;
		top: 19%;
		border: 0px;
        /* background: linear-gradient(to right,rgba(18,36,56,0) 0%,rgba(14,48,96,1) 100%); */
        /* background: rgba(14,48,96,0.3); */
        padding: 0 1%;
	}
</style>

<script>

import head from '@/components/mkcn-left-one/head'
import right from '@/components/mkcn-left-one/right'
import left from '@/components/mkcn-left-one/left'


import map from '../../assets/js/map.js'
import cccv from '../../assets/img/4.png'
import cc from '../../assets/img/2.png'
import ccc from '../../assets/img/1.png'

import axios from 'axios'
import store from "../../store"
let local;
export default {
    components: {
        'app-head': head,
        'app-left': left,
        'app-right': right
    },
    data() {
        return{
            aaa:this.$store.state.marker,
            input:"",
        }
    },
    methods: {
        mappp:function(){/*BMAP_SATELLITE_MAP BMAP_HYBRID_MAP*/
            let myIcon;
            let map =new BMap.Map(this.$refs.allmap,{minZoom:9,maxZoom:12,mapType:BMAP_SATELLITE_MAP});
            map.centerAndZoom(new BMap.Point(this.$route.query.lnt,this.$route.query.lat),11);
            map.enableScrollWheelZoom(true);
            map.clearOverlays();
            let bdary = new BMap.Boundary();

            let ac = new BMap.Autocomplete(    //建立一个自动完成的对象
					{"input" : "suggestId"
					,"location" : map,
				});
            // 创建位置检索、周边检索和范围检索
            local = new BMap.LocalSearch(map, {
                renderOptions: {
                    map: map
                }
            });

            bdary.get("山西省"+this.$store.state.diqu+this.$route.query.id, (rs) => { 
                const count = rs.boundaries.length;
                if (count === 0) {
                    alert('未能获取当前输入行政区域');
                    return ; 
                }
                for (var i = 0; i < count; i++) {
                    let ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: this.$store.state.strokeWeight, strokeColor: this.$store.state.strokeColor,fillColor: this.$store.state.fillColor});
                    map.addOverlay(ply);
                }
                
               
                axios.get(this.$store.state.url+'iCounty/list', {//核定产量 当前产量
                    params: {
                        city:this.$route.query.id
                    }
                })
                .then((response)=>{
                    let yweight=[]//传递数据变量年产量
                    let minename=[]//传递数据变量矿名
                    let yearplan=[]//传递数据变量核定产量
                    for(var i=0;i<response.data.length;i++ ){
                        myIcon = new BMap.Icon(cc, new BMap.Size(30,30));
                        let marker = new BMap.Marker(new BMap.Point(response.data[i].lnt,response.data[i].lat),{icon:myIcon}); // 创建标注
                        map.addOverlay(marker);//添加描点
                        let html="<div style='margin-top:10px;'>"+
                            "<h5 style='background-color:#102041;text-align:center;color:#fff;'>"+ response.data[i].minename + "煤矿"+"</h5>"+
                            "<h5>所属机构:<span>"+response.data[i].fn+"</span></h5>"+
                            "<h5>风险等级:<span>"+ "高"+"</span></h5>"+
                            "<h5>瓦斯等级:<span>"+"高瓦斯矿井"+"</span></h5>"+
                            "<h5>水文地质类型:<span>"+"复杂"+"</span></h5>"+
                        "</div>"
                        this.markerclick(map,marker,response.data[i],html)

                        yweight.push(response.data[i].yweight)
                        minename.push(response.data[i].name)
                        yearplan.push(response.data[i].yearplan)
                        
                    }
                    let evalyweight =eval(yweight.join("+"));
                    let evalyearplan=eval(yearplan.join("+"));
                    this.$refs.leftchild.mkcnclefthart1(yweight,minename);
                    this.$refs.headchird.headd(evalyweight,evalyearplan);
                })
                .catch((response)=> {
                    console.log(response);
                });




                
            });   
           
        },
        markerclick:function(map,marker,xonmath,html){
            marker.addEventListener("click",() =>{
                this.openInfo(map,marker,html)
                // this.$router.push("mkcnchild")
            });
        },
        openInfo:function(map,marker,html){//信息窗口
            var p = marker.getPosition();
            var point = new BMap.Point(p.lng, p.lat);
            var infoWindow = new BMap.InfoWindow(html);  // 创建信息窗口对象 
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        },
        location:function(){
            this.mappp()
        },//定位
        theLocation:function(){
            if (this.input != "") {
                local.search(this.input);
            }
        },//搜索功能
        axioslefttwo:function(){//联网为联网
            axios.get(this.$store.state.url+'/iList/view', {
                params: {
                    city:this.$route.query.id
                }
            })
            .then((response)=>{
                let pie =response.data
                console.log(response)
                this.$refs.leftchild.mkcnclefthart2(pie);
            })
            .catch((response)=> {
                console.log(response);
            });
        },
        axiosrightone:function(){//超产为超产
            axios.get(this.$store.state.url+'iCount/list', {
                params: {
                    city:this.$route.query.id
                }
            })
            .then((response)=>{
                let pie =response.data
                this.$refs.rightchild.mkcnrightchart1(pie);
            })
            .catch((response)=> {
                console.log(response);
            });
        },

    },
    mounted(){
        this.mappp()
        this.axioslefttwo()
        this.axiosrightone()
    }

}
</script>
