<template>
    <div id="jxry-head">
        <div class="div">
            <div class="div-foot">
                <button>有领导带班矿数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>26</span>座
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>单班超千人矿数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>26</span>座
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>超时超员报警</button>
            </div>
            <div class="div-head">
                <button>超时人数:<span>664</span>人</button>
                <button>超员矿数:<span>8</span>座</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>交接班方式</button>
            </div>
            <div class="div-head">
                <button>井上交接班矿数:<span>13</span>座</button>
                <button>井下交接班矿数:<span>919</span>座</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>井下作业人数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>13111</span>人
                </button>
            </div>
        </div>
    </div>
</template>
<style>
    #jxry-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #jxry-head .div .div-head{
        width: 100%;
        height: 70%;
    }
    #jxry-head .div .div-head button{
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
    }
    #jxry-head .div .div-head button span{
        color: orangered;
        font-size: 25px;
        padding: 0 5px;
    }
    #jxry-head .div:nth-child(1) .div-head button,#jxry-head .div:nth-child(2) .div-head button,#jxry-head .div:nth-child(5) .div-head button{
        width: 100%;
        height: 100%;
        text-align: left;
        padding-left: 10px;
    }
    #jxry-head .div:nth-child(3) .div-head button,#jxry-head .div:nth-child(4)  .div-head button{
        width: 100%;
        height: 50%;
        text-align: left;
        padding-left: 10px;
    }
    #jxry-head .div:nth-child(3) .div-head button span,#jxry-head .div:nth-child(4) .div-head button  span{
        font-size: 20px; 
    }
    #jxry-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #jxry-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        font-size: 15px;
    }
</style>

