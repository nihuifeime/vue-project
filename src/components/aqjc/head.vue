<template>
    <div id="zhjc-head">
        <div class="div">
            <div class="div-foot">
                <button>队伍信息</button>
            </div>
            <div class="div-head">
                <button>
                    救援队伍数<span>30</span>支
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>专家信息</button>
            </div>
            <div class="div-head">
                <button>
                    <span>461</span>人
                </button>
                
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>预案信息</button>
            </div>
            <div class="div-head">
               <button>
                   无应急预案矿数:<span>811</span>座
                </button>
                <button>
                    应急预案数:<span>266</span> 个
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>事故信息</button>
            </div>
            <div class="div-head">
               <button>
                    事故数:<span>0</span>起
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>死亡人数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>0</span>人
                </button>
            </div>
        </div>
    </div>
</template>
<style>
    #aqjc-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #aqjc-head .div .div-head{
        width: 100%;
        height: 70%;
    }
    #aqjc-head .div .div-head button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        text-align: left;
        padding-left: 10px;
    }
    #aqjc-head .div:nth-child(3) .div-head button{
        height: 50%;
    }
    #aqjc-head .div .div-head button span{
        color: orangered;
        font-size: 20px;
        padding: 0 5px;
    }
    #aqjc-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #aqjc-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
    }
</style>

