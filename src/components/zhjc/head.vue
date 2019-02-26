<template>
    <div id="zhjc-head">
        <div class="div">
            <div class="div-foot">
                <button>基本信息</button>
            </div>
            <div class="div-head">
                <button>煤矿总数/生产矿数:<span><b>500</b>/<b>350</b></span></button>
                <button>井下作业人数:<span><b>2100</b></span></button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>事故信息</button>
            </div>
            <div class="div-head">
                <button>当年事故起数/死亡人数:<span><b>0</b>/<b>0</b></span></button>
                <button>百万吨死亡率:<span>0/百万吨</span></button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>安全环境信息</button>
            </div>
            <div class="div-head">
                <button>主扇报警矿数:<span><b>10</b></span></button>
                <button>甲烷超限2分钟以上矿数:<span><b>1</b></span></button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>水文信息</button>
            </div>
            <div class="div-head">
                <button>涌水量超限报警:<span><b>0</b>/条</span></button>
                <button>水仓水位超限报警:<span><b>0</b>/条</span></button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>人员信息</button>
            </div>
            <div class="div-head">
                <button>无领导带班矿数:<span><b>8</b></span></button>
                <button>单班超千人矿数:<span><b>0</b></span></button>
            </div>
        </div>
    </div>
</template>
<style>
    #zhjc-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #zhjc-head .div .div-head{
        width: 100%;
        height: 70%;
    }
    #zhjc-head .div .div-head button{
        width: 100%;
        height: 50%;
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        padding-left: 10px;
        font-size: 13px;
        text-align: left;
    }
    #zhjc-head .div .div-head button span b{
        color: orangered;
        font-size: 15px;
        padding: 0 5px;
    }
    #zhjc-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #zhjc-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        font-size: 15px;
    }
</style>

