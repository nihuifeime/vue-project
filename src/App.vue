<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
  min-width: 1200px;
  overflow: hidden;
}
a{
  text-decoration:none !important;
}
.anchorBL{
  display: none !important;
}
::-webkit-scrollbar   
{   
    width: 4px;   
    height: 4px;   
    background-color: rgba(18,36,56,0.3);
    /*display: none;*/   
 }   
     
/*定义滚动条轨道 内阴影+圆角*/   
::-webkit-scrollbar-track   
{   
   box-shadow: inset 0 0 6px rgba(0,0,0,0.3);   
    border-radius: 0px;   
    /*background-color: #101F35;*/   
}   
     
/*定义滑块 内阴影+圆角*/   
::-webkit-scrollbar-thumb   
{   
    border-radius: 3px;   
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);   
    background-color: #f5f5f5;
}
.border{
	height: 0.8%;
}
.tangram-suggestion-main{
        z-index: 99999 !important;
    }
</style>
