<template>
  <div class="benefits">
    <div class="benefits__title">
      <h1>Powerfull PSD Templates</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="benefits__advantages">
      <div class="advantage">
        <h2>Clean & modern layout</h2>
        <img src="../assets/benefits/graph-line.png" alt="Line">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
      </div>
      <div class="advantage">
        <h2>Easy to customize</h2>
        <img src="../assets/benefits/graph-line.png" alt="Line">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Observer: () => import('../Observer')
  }
}
</script>

<style lang="scss" scoped>
.benefits{
  font-family: 'Roboto';
  padding: 150px 0;
  &__title{
    width: 47%;
    margin: 0 auto;
    text-align: center;
    h1{
      color: #0e1a35;
      font-size: 60px;
      font-weight: 100;
    }
    p{
      margin-top: 40px;
      color: #8492af;
      line-height: 25px;
    }
  }
  &__advantages{
    height: 550px;
    margin: 100px auto 0;
    padding: 50px 250px;
    background: url('../assets/benefits/benefits_bg.png') no-repeat;
    background-position: center center;
    display: flex;
    .advantage{
      h2{
        color: #0e1a35;
        font-weight: 700;
      }
      p{
        width: 33%;
        color: #8492af;
      }
      &:first-child{
        margin-top: 35px;
        text-align: left;
        align-self: flex-start;
        img{
          transform: rotate(180deg)
        }
      }
      &:last-child{
        margin-bottom: 70px;
        text-align: right;
        align-self: flex-end;
        p{
          margin-left: auto;
        }
      }
    }
  }
}

</style>