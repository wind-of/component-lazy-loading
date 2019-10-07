<template>
  <div class="wrapper">
    <transition :name="animationType">
      <div v-if="isIntersecting" :class="className">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>



<script>
export default {
  props: ['className', 'animationType'],
  data: () => ({
    observer: null,
    isIntersecting: null
  }),
  methods: {
    intersect() {
      this.isIntersecting = true;
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      entry && entry.isIntersecting ? this.intersect() : '';
    });
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  }
}
</script>

<style lang="scss" scoped>
// === Animation === \\
.fadeToBottom-enter-active, .fadeToBottom-leave-active,
.fadeToTop-enter-active, .fadeToTop-leave-active,
.scaleOut-enter-active, .scaleOut-leave-active{
  transition: all 1s;
}

.fadeToBottom-enter, .fadeToBottom-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.fadeToTop-enter, .fadeToTop-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.scaleOut-enter, .scaleOut-leave-to {
  opacity: 0;
  transform: scale(.9);
}
</style>