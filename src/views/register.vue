<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form  -->
      <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              type="text"
              placeholder="isMoney"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              v-model="fullName"
            />
          </label>
        </div>
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
          <button
            v-if="!ispPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>

          <button
            v-else
            type="button"
            class="py-3 text-center w-full bg-gray text-white font-bold rounded-lg cursor-not-allowed"
            disabled
          >
            ...Loading
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
        <span class="font-semibold">i'm already a member.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Login', params: {} }" class="text-primary font-bold">Sign In</router-link>
        </span>
      </div>
      <!-- enđ diretion  -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSignUp } from '@/composables/useSignUp';
import { useRouter } from 'vue-router';
export default {
  name: 'RegisterView',
  setup() {
    const { error, ispPending, signUp } = useSignUp();
    const router = useRouter();

    const fullName = ref('');
    const email = ref('');
    const password = ref('');

    async function onSubmit() {
      // console.log({ fullName, password, email });
      await signUp(email.value, password.value, fullName.value);
      if (!error.value) router.push({ name: 'Profile', params: {} });
    }
    return { fullName, email, password, error, ispPending, onSubmit };
  },
};
</script>
