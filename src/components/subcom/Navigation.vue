<template>
  <div class="navigation">
    <div class="navigation__logo">
      <img src="../../assets/header/logo.png" alt="MercuryLogo">
    </div>
    <ul class="navigation__bar">
      <li>Features</li>
      <li>Pricing</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
    <div class="navigation__login">
      <a href="/">Login</a>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.navigation{
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  &__logo{
    cursor: pointer;
  }
  &__bar{
    margin-left: auto;
    display: flex;
    li{
      margin: 0 20px;
      color: #fff;
      list-style: none;
      cursor: pointer;
    }
  }
  &__login{
    a{
      text-decoration: none;
      color: #5584ff;
      margin: 0 25px;
      padding: 10px 30px;
      border-radius: 24px;
      border: 1px solid rgba(85, 132, 255, 0.3);
    }
  }
}
</style>