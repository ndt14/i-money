<template>
  <div class="home">
    <h1 class="mt-2" v-if="user">Name: {{ user.displayName }}</h1>
  </div>
</template>

<script>
import { useUser } from '@/composables/useUser';

// @ is an alias to /src

export default {
  name: 'HomeView',
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
