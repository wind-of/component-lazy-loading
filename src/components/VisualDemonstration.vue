<template>
  <Observer className="visual-demo" animationType="fadeInToTop">
    <section class="visual-demo__demonstration">
      <img src="../assets/visual-demo/demonstration.png" alt="demonstration">
    </section>
    <section class="visual-demo__content">
      <div class="title">
        <h1>Drag & Drop</h1>
      </div>
      <div class="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div class="chevrons">
        <img src="../assets/base/Arrow_left.png" alt="chevron-left">
        <img src="../assets/base/Arrow_right.png" alt="chevron-right">
      </div>
    </section>
  </Observer>
</template>

<style lang="scss">
.visual-demo{
  margin-top: 100px;
  padding: 100px;
  font-family: 'Roboto';
  background: url('../assets/visual-demo/demo-bg.png');
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &__content{
    .title h1{
      color: #fff;
      font-size: 60px;
      font-weight: 100;
    }
    .text{
      width: 68%;
      margin: 50px 0;
      color: #8492af;
      font-size: 18px;
    }
    .chevrons img{
      margin: 0 10px;
    }
  }
}
</style>