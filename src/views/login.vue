<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form  -->
      <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6">
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              id="email"
              type="email"
              placeholder="Email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              type="password"
              placeholder="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              v-model="password"
            />
          </label>
        </div>

        <div class="row">
          <button type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
            Sign Up
          </button>
        </div>
      </form>
      <!-- ennd form  -->

      <!-- start erorr  -->
      <div class="text-left mt-8 text-red">
        <span>{{ error }}</span>
      </div>
      <!-- end  -->

      <!-- start diẻtiopn -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">i'm new user.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Register', params: {} }" class="text-primary font-bold">Sign Up</router-link>
        </span>
      </div>
      <!-- enđ diretion  -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSignIn } from '@/composables/useSignIn';
import { useRouter } from 'vue-router';
export default {
  name: 'LoginView',
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: 'Profile', params: {} });
      // console.log(email, password);
    }
    return { onSubmit, email, password, error, isPending };
  },
};
</script>
