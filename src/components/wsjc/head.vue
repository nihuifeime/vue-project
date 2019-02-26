<template>
    <div id="zhjc-head">
        <div class="div">
            <div class="div-foot">
                <button>瓦斯报警传感器个数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>10</span>个 <br>
                    1%-1.5%
                </button>
                <button>
                    <span>10</span>个 <br>
                    1.5%-3%
                </button>
                <button>
                    <span>10</span>个 <br>
                    大于3%
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>瓦斯报警传感器个数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>72</span>个
                </button>
                <button>
                    持续时间长达12分钟
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>主扇报警个数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>10</span>个
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>一氧化碳报警传感器个数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>8</span>个
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>传输状态</button>
            </div>
            <div class="div-head">
                <button>
                    <span>139</span>座 <br>
                    正常
                </button>
                <button>
                    <span>214</span>座  <br>
                    异常
                </button>
                <button>
                    <span>672</span>座  <br>
                    未联网
                </button>
            </div>
        </div>
    </div>
</template>
<style>
    #wsjc-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #wsjc-head .div .div-head{
        width: 100%;
        height: 70%;
    }
    #wsjc-head .div .div-head button span{
        color: orangered;
        font-size: 15px;
        padding: 0 5px;
    }
    #wsjc-head .div .div-head button{
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
    }
    #wsjc-head .div:first-child .div-head button{
        width: 32%;
        height: 100%;
       
    }
    #wsjc-head .div:nth-child(2) .div-head button:first-child{
        width: 100%;
        height: 60%;
        padding-left: 10px;
    }
    #wsjc-head .div:nth-child(2) .div-head button:first-child span{
        font-size: 25px;
    }
    #wsjc-head .div:nth-child(2) .div-head button:last-child{
        width: 100%;
        height: 40%;
        text-align: right;
        padding-right: 10px;
    }

    #wsjc-head .div:nth-child(3) .div-head button,#wsjc-head .div:nth-child(4) .div-head button{
        width: 100%;
        height: 100%;
    }
    #wsjc-head .div:nth-child(3) .div-head button span,#wsjc-head .div:nth-child(4) .div-head button span{
        font-size: 25px;
    }

    #wsjc-head .div:last-child .div-head button{
        width: 32%;
        height: 100%;
       
    }

    #wsjc-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #wsjc-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        font-size: 15px;
    }
</style>

