<template>
  <div>
    <div class="icon">
      <img :src="feature.img" alt="Icon">
    </div>
    <div class="content">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.content }}</p>
    </div>
    <div class="button">
      <a href="/">See more</a>
    </div>
  </div>
</template>


<script>
export default{
  props: {
    feature: Object
  }
}
</script>


<style lang="scss" scoped>
.content{
  h3{
    margin: 40px 0 15px;
    color: #0e1a35;
  }
  p{
    color: #8492af;
  }
}
.button{
  margin-top: 35px;
  padding: 8px 60px;
  border-radius: 24px;
  border: 1px solid rgba(132, 146, 175, 0.3);
  background: #fff;
  transition: .2s ease-in-out;
  display: inline-block;
  &:hover{
    border: 1px solid rgba(132, 146, 175, 0.8);
  }
  a{
    color: #111;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>