<template>
  <!-- <h1>default</h1> -->
  <NavigationHeaderVue />
  <slot />
  <NavigationBottom v-if="meta.isShowFooter" />
</template>

<script>
import NavigationBottom from '@/components/NavigationBottom.vue';
import NavigationHeaderVue from '@/components/NavigationHeader.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
export default {
  name: 'DefaultLayout',
  components: {
    NavigationBottom,
    NavigationHeaderVue,
  },
  setup() {
    const router = useRoute();
    return {
      meta: computed(() => router.meta),
    };
  },
};
</script>

<style></style>
