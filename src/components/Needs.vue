<template>
  <div class="needs">
    <section class="needs__right-section">
      <div class="needs__title">
        <h1>All You need is a browser!</h1>
      </div>
      <div class="needs__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <br>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div class="needs__features">
        <div class="feature">
          <img src="../assets/base/checked.png" alt="checked">
          <span>Lorem ipsum dolor sit amet consectetur</span>
        </div>
        <div class="feature">
          <img src="../assets/base/checked.png" alt="checked">
          <span>Ut enim ad minim veniam quis nostrud</span>
        </div>
      </div>
    </section>
    <section class="needs__left-section">
      <img src="../assets/needs/merkury-demo-2.png" alt="MercuryDemo">
    </section>
  </div>
</template>



<style lang="scss" scoped>
.needs{
  margin-top: 150px;
  font-family: 'Roboto';
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &__right-section, &__left-section{
    width: 40%;
  }
  &__title h1{
    font-size: 60px;
    font-weight: 100;
    color: #0e1a35;
  }
  &__content{
    width: 68%;
    margin-top: 70px;
    font-size: 18px;
    color: #8492af;
  }
  &__features{
    margin: 50px 20px;
    color: #5584ff;
    cursor: default;
    .feature{
      margin: 20px 0;
      display: flex;
      align-items: center;
      span{
        font-size: 20px;
        margin-left: 20px;
      }
    }
  }
}
</style>