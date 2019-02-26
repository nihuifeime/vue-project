<template>
    <div>
        <div class="div">
            <div class="div-foot">
                <button>核定产能</button>
            </div>
            <div class="div-head">
               <button>
                    <span>{{hdcn}}</span>万吨
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>当前累计产量</button>
            </div>
            <div class="div-head">
               <button>
                    <span>{{dqcl}}</span>万吨
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>当前累计销量</button>
            </div>
            <div class="div-head">
                <button>
                    <span>0.000</span>万吨
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>当前库存</button>
            </div>
            <div class="div-head">
               <button>
                    <span>0.000</span>万吨
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>当前累计用电量</button>
            </div>
            <div class="div-head">
               <button>
                    <span>0.000</span>万千瓦时
                </button>
            </div>
        </div>
    </div>
</template> 
<style>
    #mkcn-left-one-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #mkcn-left-one-head .div .div-head{
        width: 100%;
        height: 70%;
    }
    #mkcn-left-one-head .div .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 15px;
    }
    #mkcn-left-one-head .div .div-head button span{
        color: orangered;
        font-size: 25px;
        padding: 0 5px;
    }
    #mkcn-left-one-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-left-one-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
    }
</style>
<script>
export default {
    data(){
        return{
            hdcn:0,
            dqcl:0,
        }
    },
    methods:{
        headd(a,b){
            this.hdcn=b
            this.dqcl=a/10000
        }
    }
}
</script>

