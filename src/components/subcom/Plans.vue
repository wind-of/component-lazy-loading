<template>
  <div class="plans">
    <div class="plans__plan" 
         v-for="{id, name, price, benefits} of plans" :key="id">
      <h2>{{ name }}</h2>
      <h1><small>$</small>{{ price }}<span>/mon</span></h1>
      <ul class="plans__benefits-row">
        <li v-for="{key, advantage, description} of benefits" :key="key">
          <img :src="isAdvantage(advantage)" alt="icon">
          <p>{{ description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default{
  props: ['plans'],
  methods: {
    isAdvantage(value) {
      return value ? require('../../assets/pricing/checked.png') : require('../../assets/pricing/delete.png');
    }
  }
}
</script> 


<style lang="scss" scoped>
.plans{
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  &__plan{
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.42);
    padding: 40px;
    text-align: center;
    h2{
      color: #0e1a35;
      text-transform: uppercase;
    }
    h1{
      margin: 10px 0;
      color: #0e1a35;
      font-weight: 700;
      font-size: 60px;
      letter-spacing: 1px;
      span{
        font-size: 16px;
        color: #8492af;
      }
    }
  }
  &__benefits-row{
    margin: 40px 0;
    li{
      margin: 20px 0;
      color: #8492af;
      display: flex;
      align-items: center;
      p{
        margin-left: 10px;
      }
    }
  }
}
</style>