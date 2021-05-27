<template>
  <AppNav />
  <div id="main">
    <!-- 左侧边栏 -->
    <AppSide />
    <!-- content 路由区域 -->
    <div class="adminRuote">
      123456
    </div>
    <router-view></router-view>
  </div>
</template>
  
<script>
import AppNav from "./components/AppNav";
import AppSide from "./components/AppSide";

export default {
  name: "App",
  components: {
    AppNav,
    AppSide,
  },
};
</script>

<style>
*{
  user-select: none;
}
@import "./assets/css/reset.css";
@import "./assets/css/font.css";
#main {
  margin: 10px 0 0 0;
  background: #ddd;
  display: flex;
  justify-content:left;
}
</style>
