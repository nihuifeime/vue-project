import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 
Vue.use(Vuex)

const state = {
    url:"http://192.168.14.214:8090/JC_OutPut/",
    wheretitle:"山西",
    //maptype:BMAP_SATELLITE_MAP,//BMAP_HYBRID_MAP  BMAP_SATELLITE_MAP
    strokeColor:'#114bf3',
    fillColor:'none',
    strokeWeight:5,
    diqu:"临汾市",
    cslnt:111.447091,
    cslat:36.198199,
    cszoom:10,
    marker:1,

    mkcnchild:"",
}

const mutations={ 
    // storewsjc1(state){
        
    // },//方法
    
    //store.commit("storewsjc1")//在组件中调用
}

export default new Vuex.Store({
    state,
    mutations
})
