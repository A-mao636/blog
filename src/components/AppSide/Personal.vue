<template>
  <div class="personal">
    <div class="adminBar">
      <img src="../../assets/img/Amao1.jpeg" alt="开发者头像" />
    </div>
    <div class="adminInfo">
      <div class="namespace">
        <p class="p">Name：Amao</p>
        <p class="p">Work：WEB Developer</p>
      </div>
    </div>
    <div class="iconspace">
      <span title="男的尽量别加我" class="icon weixin">
        <a href="">icon</a>
      </span>
      <span title="男的尽量别加我" class="icon qq">
        <a href="">icon</a>
      </span>
      <span title="男的尽量别加我" class="icon weibo">
        <a href="">icon</a>
      </span>
      <span title="独立唱作新人求关注" class="icon wangyiyun">
        <a href="https://music.163.com/#/artist?id=36031269">音乐</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Personal",
};
</script>

<style scoped lang="less">
.personal {
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  background-color: #66cccc;
  .adminBar {
    float: left;
    box-sizing: border-box;
    margin: 18px 3px 0 3px;
    width: 65px;
    height: 65px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .adminInfo {
    float: left;
    box-sizing: border-box;
    margin: 10px 3px 0 3px;
    border: 1px solid #000;
    padding: 14px;
    text-indent: 5px;
    width: 190px;
    height: 80px;
    .p {
      line-height: 25px;
    }
  }
  .iconspace {
    display: flex;
    justify-content: space-around;
    align-items: center;
    float: left;
    margin: 10px 0 0 0;
    box-sizing: border-box;
    border: 1px solid #000;
    text-indent: 5px;
    width: 270px;
    height: 50px;
    .icon {
      box-sizing: border-box;
      width: 39px;
      height: 35px;
      border: 1px solid #000;
      line-height: 35px;
    }
  }
}
</style>














