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
export default {
  props: {
    features: Array
  },
  components: {
    Feature: () => import('./sub/Feature')
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