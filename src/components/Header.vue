<template>
  <Observer className="header" animationType="fadeInToBottom">
    <Navigation/>
    <Content/>
  </Observer>
</template>


<script>
export default {
  components: {
    Navigation: () => import('./sub/HeaderNavigation.vue'),
    Content:    () => import('./sub/HeaderContent.vue')
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
