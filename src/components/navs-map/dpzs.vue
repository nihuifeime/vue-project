<template>
    <div id="dpzh">
        <div class="main">
            <span>跳转页面进入大屏展示</span> <a href="http://192.168.14.34:8081/#/" target="_blant">http://192.168.14.34:8081/#/</a>
        </div> 
    </div>    
</template>
<style>
    #dpzh{
        width: 100%;
        height: 100%;
    }
    .main{
        position: absolute; 
        top: calc(50% - 3em);
        left: calc(50% - 18em); 
        width: 36em;
        height:6em;
        text-shadow:0px 0px 5px #333;
        text-align: center;
    }
    .main span{
        font-size: 30px;
        font-weight: 600;
        animation:text 1.5s linear infinite;
    }
    @keyframes text {
		50%{
			text-shadow: 10px 0px 40px #333;
		}
		100% {
			text-shadow: 0px 0px 5px #333;
		}
	}
    .main a{
        color: blue;
    }
</style>

