<template>
  <Observer className="pricing" animationType="scaleOut">
    <div class="pricing__title">
      <h1>Check our pricing!</h1>
    </div>
    <Plans :plans="plans"/>
    <div class="pricing__postscriptum">
      <div class="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </div>
      <div class="join">
        <span>
          <img src="../assets/base/line.png" alt="graph">
        </span>
        <a href="/">Join now!</a>
        <span>
          <img src="../assets/base/line.png" alt="graph">
        </span>
      </div>
    </div>
  </Observer>
</template>


<script>
export default{
  props: {
    plans: Array
  },
  components: {
    Plans: () => import('./sub/PricingPlans')
  }
}
</script>


<style lang="scss" scoped>
.pricing{
  font-family: 'Roboto';
  &__title{
    text-align: center;
    margin: 50px 0;
    h1{
      color: #0e1a35;
      font-weight: 100;
      font-size: 60px;
    }
  }
  &__postscriptum{
    margin: 100px 0;
    .about{
      width: 50%;
      margin: 0 auto;
      font-size: 18px;
      color: #8492af;
      text-align: center;
    }
    .join{
      width: 40%;
      margin: 60px auto;
      display: flex;
      justify-content: space-between;
      a{
        padding: 10px 45px;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        border-radius: 24px;
        background-color: #5584ff;
        text-decoration: none;
      }
    }
  }
}
</style>