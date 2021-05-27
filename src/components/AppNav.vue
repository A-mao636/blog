<template>
  <div id="AppNav">
    <div class="main">
      <!--logo-->
      <div class="logo">
        <a href="/">Amao.fun</a>
      </div>
      <!--导航-->
      <div class="nav">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/article">文章</router-link></li>
          <li><router-link to="/message">留言</router-link></li>
          <li><router-link to="/link">友链</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
      <!--登陆与注册-->
      <div class="login">
        <el-button type="success" size="mini">登陆 / 注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNav",
};
</script>

<style lang="less" scoped>
#AppNav {
  width: 100%;
  height: 50px;
  box-shadow: 0 0 5px #000;
  background-color: #009999;

  .main {
    display: flex;
    flex: 1;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;

    .logo {
      width: 130px;
      height: 50px;
      a {
        color: rgba(255, 255, 255, 0.636);
        font-family: "Pacifico";
        line-height: 42px;
        font-size: 26px;
        letter-spacing: 5px;
      }
    }

    .nav {
      ul {
        display: flex;
        width: 100%;
        height: 50px;
        li {
          height: 50px;
          width: 100%;
          a {
            display: block;

            height: 98%;
            border-bottom: 2px solid transparent;
            padding: 0 25px;
            line-height: 48px;
            color: rgba(255, 255, 255, 0.636);
            font-weight: bolder;
            transition: all 0.3s;

            &:hover {
              color: #00ffff;
            }
            &.router-link-active {
              color: #00ffff;
              border-color: #00ffff;
            }
          }
        }
      }
    }

    .login {
      .el-button {
        background-color: #00cccc;
        font-weight: bolder;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 11px;
        border-radius: 10px;
        &:hover {
          transform: scale(1.1);
          transition: 0.35s;
        }
      }
    }
  }
}
</style>














