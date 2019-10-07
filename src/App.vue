<template>
  <div id="app">
    <Header/>
    <Features/>
    <Needs/>
    <VisualDemo/>
    <Benefits/>
    <Pricing/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Header:     () => import('./components/Header'),
    Features:   () => import('./components/Features'),
    Needs:      () => import('./components/Needs'),
    VisualDemo: () => import('./components/VisualDemonstration'),
    Benefits:   () => import('./components/Benefits'),
    Pricing:    () => import('./components/Pricing'),
    Footer:     () => import('./components/Footer'),
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
</style>