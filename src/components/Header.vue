<template>
  <Observer 
    className="header"
    animationType="fadeToBottom">
    <Navigation/>
    <Content/>
  </Observer>
</template>


<script>
export default {
  components: {
    Navigation: () => import('./subcom/Navigation.vue'),
    Content:    () => import('./subcom/Content.vue')
  }
}
</script>


<style lang="scss">
.header{
  font-family: 'Roboto';
  width: 100%;
  margin-bottom: 100px;
  background: url('../assets/header/header-bg.png');
}
</style>
