<template>
  <NavigationBrand />
  <slot />
  <!-- <h1>auth layout</h1> -->
</template>

<script>
import NavigationBrand from '@/components/NavigationBrand.vue';
export default {
  name: 'AuthLayout',
  components: {
    NavigationBrand,
  },
};
</script>

<style></style>
