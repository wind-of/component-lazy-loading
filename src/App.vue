<template>
  <div id="app">
    <Header/>
    <Features :features="features"/>
    <Needs/>
    <VisualDemo/>
    <Benefits/>
    <Pricing :plans="plans"/>
    <Footer/>
  </div>
</template>

<script>
import plans from './data/plans'
import features from './data/features'

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
  },

  data() {
    return {
      plans,
      features
    }
  },
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
}
</style>