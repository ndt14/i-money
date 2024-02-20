<template>
  <!-- start infor  -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://nupet.vn/wp-content/uploads/2023/10/ngo-nghinh-anh-meo-cute-nupet-2.jpg"
            alt="avatar profile"
            size="xs"
          />
        </div>

        <div class="font-bold text-2xl text-primary mt-3" v-if="user">{{ user.displayName }}</div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>
  <!-- end  -->

  <!-- start menu  -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="gird grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>

      <div class="gird grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="(profileOption, index) in profileOptions" :key="index">
              <router-link :to="profileOption.route" class="flex justify-between items-center py-3">
                <div class="flex items-center text-left" :class="{ 'text-red': index === profileOptions.length - 1 }">
                  <i class="t2ico text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end  -->
</template>

<script>
import { reactive } from 'vue';
import { PROFILE_OPTIONS } from '@/constants';
import { useUser } from '@/composables/useUser';
export default {
  name: 'ProfileView',
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();

    return { profileOptions, user };
  },
};
</script>
