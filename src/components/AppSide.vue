<template>
  <div id="AppSide">
    <!--个人信息-->
    <Personal></Personal>
    <!--热门文章-->
    <HotArticle></HotArticle>
    <!--最近访客-->
    <div class="visitor"></div>
  </div>
</template>

<script>
import Personal from "./AppSide/Personal";
import HotArticle from "./AppSide/HotArticle";

export default {
  name: "AppSide",
  components: {
    Personal,
    HotArticle,
  },
};
</script>

<style lang="less" scoped>
#AppSide {
  width: 270px;
  margin-right: 15px;
  
}
</style>














