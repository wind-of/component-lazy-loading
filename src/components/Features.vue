<template>
  <div class="features">
    <div class="features__row">
      <Feature class="features__feature" :feature="features[0]"/>
      <div class="graph">
        <img src="../assets/base/line.png" alt="line">
      </div>
      <Feature class="features__feature" :feature="features[1]"/>
      <div class="graph">
        <img src="../assets/base/line.png" alt="line">
      </div>
      <Feature class="features__feature" :feature="features[2]"/>
    </div>
  </div>
</template>



<script>
import Vue from 'vue';
import Feature from './subcom/Feature';

const features = [
  {
    img: require('../assets/features/stack.png'),
    title: 'Manage Your Workflow',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    img: require('../assets/features/graph.png'),
    title: 'Analytics & Insights',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    img: require('../assets/features/calendar.png'),
    title: 'Organize Your Deadlines',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

export default {
  data: () => ({
    features
  }),
  components: {
    Feature
  }
}
</script>


<style lang="scss" scoped>
.features{
  font-family: 'Roboto';
  margin-top: 200px;
  &__row{
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__feature{
    text-align: center;
  }
}
</style>