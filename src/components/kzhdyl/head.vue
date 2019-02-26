<template>
    <div id="zhjc-head">
        <div class="div">
            <div class="div-foot">
                <button>地质信息</button>
            </div>
            <div class="div-head">
                <button>冲击地压:<span>11</span>座</button>
                <button>水文地质复杂:<span>31</span>座</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>报警信息</button>
            </div>
            <div class="div-head">
                <button><span>11</span>座</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>矿震信息</button>
            </div>
            <div class="div-head">
                <button> 微震频率超过500次/日:<span>0</span>座</button>
                <button>震能量超过10⁷J/日:<span>0</span>座</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>传输状态</button>
            </div>
            <div class="div-head">
                <button>地应力系统断传:<span>0</span>座</button>
                <button>微震系统断传:<span>0</span>座</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>事故信息</button>
            </div>
            <div class="div-head">
                <button>顶板事故:<span>0</span>起</button>
                <button>水害事故:<span>0</span>起</button>
            </div>
        </div>
    </div>
</template>
<style>
    #kzhdyl-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #kzhdyl-head .div .div-head{
        width: 100%;
        height: 70%;
    }
    #kzhdyl-head .div .div-head button{
        width: 100%;
        height: 50%;
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        text-align: left;
        padding-left: 10px;
    }
    #kzhdyl-head .div:nth-child(2) .div-head button{
        width: 100%;
        height: 100%;
    }
    #kzhdyl-head .div .div-head button span{
        color: orangered;
        font-size: 20px;
        padding: 0 5px;
    }
    #kzhdyl-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #kzhdyl-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
    }
</style>

