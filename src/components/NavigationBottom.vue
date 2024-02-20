<template>
  <footer id="footer" class="fixed w-full bottom-0 left-0 bg-white py-4 p-4-safe-4">
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div data-circle class="absolute top-0 left-1/2 transform -translate-x-1/2">
      <div
        data-circle-inset
        class="absolute flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full cursor-pointer -top-6 lef-1/2 transform translate-x-1/2"
        @click="goToRoute"
      >
        <i class="t2ico t2ico-plus"></i>
      </div>
    </div>
  </footer>
</template>

<script>
import { reactive } from 'vue';
import { NAV_BOTTOM_ITEMS } from '@/constants';
import { useRouter } from 'vue-router';
export default {
  name: 'NavigationBottom',
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    function goToRoute() {
      router.push({ name: 'NewTransaction', params: {} });
    }

    return { navItems, goToRoute };
  },
};
</script>

<style lang="css" scoped>
/* footer#footer::before {
  content: '';
  background-color: #f8fafb;
  position: absolute;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
footer#footer::after {
  @apply flex items-center justify-center text-white -top-6;
  @apply w-12 h-12 rounded-full cursor-pointer;
  content: '\e921';
  background-color: #0012ff;
  position: absolute;
  font-family: 't2ico';
  left: 50%;
  transform: translateX(-50%);
} */

footer#footer > div[data-circle] {
  background-color: #f8fafb;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
