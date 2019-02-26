<template>
    <div id="mkcn-child">
        <div id="allmap" ref="allmap">
            
        </div>
        <div  style="position: absolute;z-index:99; top:19%;margin-left:17%;">
            <el-popover
                placement="right"
                width="400"
                trigger="click">
                <!-- <el-select v-model="value" filterable placeholder="请选择">
                    <el-option
                    v-for="item in this.$store.state.marker"
                    :key="item.minename"
                    :label="item.minename"
                    :value="item.minename">
                    </el-option>
                </el-select> -->
                <el-input v-model="input" placeholder="请输入内容" id="suggestId" style="width:60%;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="theLocation()">搜索</el-button>
                <el-button slot="reference" icon="el-icon-search" circle></el-button>
            </el-popover><br>
            <el-button icon="el-icon-location" circle @click="location()" class="btn"></el-button>
        </div>
        <app-head id="mkcn-child-head" ref="headchird"></app-head>
        <app-left id="mkcn-child-left" ref="leftchild"></app-left>
        <app-right id="mkcn-child-right" ref="rightchild"></app-right>
    </div>
</template> 
<style>
    #mkcn-child{
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    #allmap{
        width: 100%;
        height: 100%;
    }
    #mkcn-child-head{
        width: 100%;
        height: 10%;
        position: absolute;
        top: 7%;
        /* background: rgba(14,48,96,0.3); */
        padding: 0.5% 0;
    }
    #mkcn-child-left{
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
    #mkcn-child-right{
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

import head from '@/components/mkcn-child/head'
import right from '@/components/mkcn-child/right'
import left from '@/components/mkcn-child/left'


import map from '../../assets/js/map.js'
import cccv from '../../assets/img/4.png'
import cc from '../../assets/img/2.png'
import ccc from '../../assets/img/1.png'

import axios from 'axios'
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
            map.centerAndZoom(new BMap.Point(this.$store.state.cslnt,this.$store.state.cslat),this.$store.state.cszoom);
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

            bdary.get("山西省"+this.$store.state.diqu, (rs) => { 
                const count = rs.boundaries.length;
                if (count === 0) {
                    alert('未能获取当前输入行政区域');
                    return ; 
                }
                for (var i = 0; i < count; i++) {
                    let ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: this.$store.state.strokeWeight, strokeColor: this.$store.state.strokeColor,fillColor: this.$store.state.fillColor});
                    map.addOverlay(ply);
                }
                for(var i=0;i<this.aaa.length;i++ ){
                    myIcon = new BMap.Icon(ccc, new BMap.Size(30,30));
                    let marker = new BMap.Marker(new BMap.Point(this.aaa[i].lnt,this.aaa[i].lat),{icon:myIcon}); // 创建标注
                    map.addOverlay(marker);//添加描点
                    let label = new BMap.Label(this.aaa[i].name,{
                        offset:new BMap.Size(20,-3)
                    });
                    label.setStyle({
                        color: "#333",
                        fontSize: "12px",
                        border: '1px solid red',
                        fontFamily: "微软雅黑",
                        maxWidth: "none"
                    });
                    //marker.setLabel(label);//添加红框标注
                let html="<div style='margin-top:10px;'>"+
                        "<h5 style='background-color:#102041;text-align:center;color:#fff;'>"+ this.aaa[i].minename + "煤矿"+"</h5>"+
                        "<h5>所属机构:<span>"+this.aaa[i].fn+"</span></h5>"+
                        "<h5>风险等级:<span>"+ "高"+"</span></h5>"+
                        "<h5>瓦斯等级:<span>"+"高瓦斯矿井"+"</span></h5>"+
                        "<h5>水文地质类型:<span>"+"复杂"+"</span></h5>"+
                    "</div>"
                    this.markerclick(map,marker,this.aaa[i],html)
                }
            });   
           
        },
        markerclick:function(map,marker,xonmath,html){
            marker.addEventListener("click",() =>{
                this.openInfo(map,marker,html)
                this.$router.push("mkcnchild")
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
        axiosleftone:function(){
            this.$refs.leftchild.mkcnchildleftchart1();
            this.$refs.leftchild.mkcnchildleftchart2();
        },
        axiosrightone:function(){
            this.$refs.rightchild.mkcnchildrightchart1();
            this.$refs.rightchild.mkcnchildrightchart2();
        },
        axioshead:function(){
            
        },

    },
    mounted(){
        this.mappp()

        this.axiosleftone()
        this.axiosrightone()
        this.axioshead()
    }

}
</script>
