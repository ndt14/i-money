<template>
  <h1>logout...</h1>
</template>

<script>
import { useLogout } from '@/composables/useLogout';
import { useRouter } from 'vue-router';
export default {
  name: 'LogoutView',
  setup() {
    const { error, logOut } = useLogout();
    const router = useRouter();
    async function onLogOut() {
      await logOut();
      if (!error.value) router.push({ name: 'Login', params: {} });
    }
    onLogOut();
    return {};
  },
};
</script>
