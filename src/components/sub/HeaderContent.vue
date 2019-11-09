<template>
  <div class="content">
    <div class="start">
      <div class="start__title">
        <h1>Grow Your bussines with Mercury</h1>
        <h2>Your partner in crime!</h2>
      </div>
      <div class="start__button">
        <a href="/">Get started</a>
      </div>
    </div>
    <div class="dashboard">
      <img src="../../assets/header/home-demo.png" alt="Home Demo">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.start{
  margin-top: 100px;
  color: #fff;
  text-align: center;
  &__title{
    h1{
      font-weight: 100;
      margin-bottom: 20px;
    }
    h2{
      font-size: 28px;
      font-weight: 400;
      color: #8492af;
    }
  }
  &__button{
    margin-top: 50px;
    padding: 10px 25px;
    background-color: #5584ff;
    border-radius: 24px;
    display: inline-block;
    a{
      text-decoration: none;
      color: #ffffff;
      font-weight: 700;
    }
  }
}
.dashboard{
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  img{
    margin: 90px 0 -90px;
  }
}
</style>