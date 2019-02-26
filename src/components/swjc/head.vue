<template>
    <div id="zhjc-head">
        <div class="div">
            <div class="div-foot">
                <button>涌水量超限报警</button>
            </div>
            <div class="div-head">
                <button>
                    <span>0</span>条
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>水仓水位超限报警</button>
            </div>
            <div class="div-head">
                 <button>
                    <span>0</span>条
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>降雨量超限报警</button>
            </div>
            <div class="div-head">
               <button>
                    <span>0</span>条
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>矿井突水记录</button>
            </div>
            <div class="div-head">
                 <button>
                    <span>0</span>条
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>探水不规范矿井</button>
            </div>
            <div class="div-head">
                <button>
                    <span>0</span>座
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #swjc-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #swjc-head .div .div-head{
        width: 100%;
        height: 70%;
    }
     #swjc-head .div .div-head button{
         width: 100%;
         height: 100%;
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 15px;
    }
    #swjc-head .div .div-head button span{
        color: orangered;
        font-size: 25px;
        padding: 0 5px;
    }
    #swjc-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #swjc-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
    }
</style> 

