<template>
    <div id="mkcn-child-head">
        <div class="div">
            <div class="div-foot">
                <button>安全风险指数</button>
            </div>
            <div class="div-head">
                <button>
                    <span>55.89</span>
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>人员信息</button>
            </div>
            <div class="div-head">
                <button>井下人数:<span>0</span>人</button>
                <button>带班领导数:<span>0</span>人</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>瓦斯报警数</button>
            </div>
            <div class="div-head">
                 <button>
                    <span>0</span>个
                </button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>报警信息</button>
            </div>
            <div class="div-head">
                <button>主扇报警个数:<span>0</span>个</button>
                <button>风速报警个数:<span>0</span>个</button>
            </div>
        </div>
        <div class="div">
            <div class="div-foot">
                <button>事故信息</button>
            </div>
            <div class="div-head">
                <button>当年事故起数:<span>0</span>起</button>
                <button>当年死亡人数:<span>0</span>人</button>
            </div>
        </div>
    </div>
</template>
<style>
    #mkcn-child-head .div{
        width: 16.8%;
        height: 100%;
        float: left;
        margin-left: 1%;
        background: rgba(14,48,96,0.7); 
        border-radius: 5px;
    }
    #mkcn-child-head .div .div-head{
        width: 100%;
        height: 70%;
    }
    #mkcn-child-head .div .div-head button{
        background: rgba(0,0,0,0);
        border: 0px;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
    }
    #mkcn-child-head .div .div-head button span{
        color: orangered;
        font-size: 25px;
        padding: 0 5px;
    }
    #mkcn-child-head .div:nth-child(1) .div-head button,#mkcn-child-head .div:nth-child(3) .div-head button{
        width: 100%;
        height: 100%;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-child-head .div:nth-child(2) .div-head button,#mkcn-child-head .div:nth-child(4)  .div-head button,#mkcn-child-head .div:nth-child(5)  .div-head button{
        width: 100%;
        height: 50%;
        text-align: left;
        padding-left: 10px;
    }
    #mkcn-child-head .div .div-foot{
        width: 100%;
        height: 30%;
        background: rgba(14,48,96,0.5);
        text-align: center;
    }
    #mkcn-child-head .div .div-foot button{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        color: #fff;
        outline: none;
        border: 0px;
        font-size: 15px;
    }
</style>

