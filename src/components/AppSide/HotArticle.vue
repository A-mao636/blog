<template>
  <div class="hotArticle">
    <h4>Hot Articles</h4>
    <ul>
      <li v-for="(item, index) in hostList" :key="index">
        <i>{{ index + 1 }}</i>
        <a :href="item.src" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotArticle",
  data() {
    return {
      hostList: [
        { title: "文章标题1", src: "https://www.bootcss.com/p/websafecolors/" },
        { title: "文章标题2", src: "https://element-plus.gitee.io/#/zh-CN" },
        {
          title: "文章标题3",
          src: "https://music.163.com/#/artist?id=36031269",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.hotArticle {
  box-sizing: border-box;
  width: 100%;
  font-family: "Quicksand", "sans-serif";
  box-shadow: 0 0 4px #ddd;
  background-color: #fff;
  padding: 20px;

  h4 {
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e9e7;
    color: #383937;
    font-size: 16px;
  }
  ul {
    margin-top: 12px;
    li {
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      height: 40px;
      line-height: 40px;
      padding: 0 3px;
      &:nth-of-type(1) i {
        background-color: #33c3f3;
      }
      &:nth-of-type(2) i {
        background-color: #30b2ddb6;
      }
      &:nth-of-type(3) i {
        background-color: #29a1c973;
      }
      i {
        display: block;
        width: 22px;
        height: 22px;
        margin-top: 9px;
        margin-right: 15px;
        border-radius: 50%;
        line-height: 16px;
        font-size: 16px;
        font-style: normal;
        color: #fff;
        text-align: center;
        font-weight: 100;
        font-family: "Pacifico", "sans-serif";
      }
      a {
        display: block;
        flex: 1;
        color: #787977;
        font-size: 14px;
        text-decoration: none;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
          color: skyblue;
          transition: 0.3s;
          transform: translate(0,-1.5px);
        }
      }
    }
  }
}
</style>














