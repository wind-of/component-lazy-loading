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
const plans = [
  {
    id: 1,
    name: 'Bronze plan',
    price: 19,
    benefits: [
      {
        key: '12121fd',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: '12121f',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: '12121',
        advantage: false,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: '1212',
        advantage: false,
        description: 'Lorem ipsum dolor sit am'
      }
    ]
  },
  {
    id: 2,
    name: 'Silver plan',
    price: 49,
    benefits: [
      {
        key: 'dojkgjs',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: 'dojkgj',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: 'dojkg',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: 'dojk',
        advantage: false,
        description: 'Lorem ipsum dolor sit am'
      }
    ]
  },
  {
    id: 3,
    name: 'Gold plan',
    price: 99,
    benefits: [
      {
        key: '2ujp2ntj20',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: '2ujp2ntj2',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: '2ujp2ntj',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      },
      {
        key: '2ujp2nt',
        advantage: true,
        description: 'Lorem ipsum dolor sit am'
      }
    ]
  }
]

import Plans from './subcom/Plans'

export default{
  name: 'pricing',
  data: () => ({
    plans
  }),
  components: {
    Plans
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
  // Plan's styles are in the "Plans.vue"-file
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