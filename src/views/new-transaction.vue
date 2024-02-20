<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span class="inline=block px-1 text-dark border border-dark rounded text-sm font-bold">USD</span>
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="text"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="category" class="flex items-center">
              <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 pb-1">
                <span class="inline-block ml-auto text-dark w-8 h-8 rounded-full bg-blue-300"></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <!-- <span class="font-semibold text-xs text-dark">Total</span> -->
                <input
                  id="category"
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 pb-1">
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <!-- <span class="font-semibold text-xs text-dark">Total</span> -->
                <input id="note" class="text-dark w-full outline-none" type="text" placeholder="note" v-model="note" />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <!-- <span class="font-semibold text-xs text-dark">Total</span> -->
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>

          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <!-- <span class="font-semibold text-xs text-dark">Total</span> -->
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetail">
      <button @click="isMoreDetail = true" class="bg-white rounded-lg py-3 w-full text-primary font-semibold">
        More Details
      </button>
    </div>

    <template v-if="isMoreDetail">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4 pb-1">
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <!-- <span class="font-semibold text-xs text-dark">Total</span> -->
                  <input
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="select a location"
                    v-model="location"
                  />
                </div>
              </label>
            </div>

            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <!-- <span class="font-semibold text-xs text-dark">Total</span> -->
                  <input
                    id="withPerson"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="with Person"
                    v-model="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- upload photto  -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <!-- <span class="font-semibold text-xs text-dark">Total</span> -->
                  <div class="w-full font-semibold">Upload Photo</div>
                  <input type="file" id="file" class="w-0 h-0 overflow-hidden absolute" @change="onChange" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </template>

    <button type="submit ">Testing add button</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useUser } from '@/composables/useUser';
import useCollection from '@/composables/useCollection';
import useStorage from '@/composables/useStorage';

export default {
  name: 'NewTransaction',
  setup() {
    const isMoreDetail = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection('transaction');
    const { uploadFile, url } = useStorage();

    const total = ref(0);
    const category = ref('');
    const note = ref('');
    const time = ref(new Date());
    const location = ref('');
    const person = ref('');

    const file = ref(null);
    const errorFile = ref(null);

    function onChange(event) {
      const selected = event.target.files[0];
      const typesFile = ['image/png', 'image/jpg'];
      // console.log(event);
      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
        console.log(file.value);
      } else {
        file.value = null;
        errorFile.value = 'could not selected file';
        console.log(errorFile.value);
      }
    }

    async function onSubmit() {
      if (file.value) await uploadFile(file.value);
      console.log('url file', url);
      const { user } = getUser(file.value);
      // const { user } = getUser();
      // console.log(user);
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        person: person.value,
        userId: user.value.uid,
        thumbnail: url.value,
      };
      await addRecord(transaction);
      console.log(error);
      console.log('created');
    }
    return { onChange, onSubmit, total, category, note, time, isMoreDetail, location, person };
  },
};
</script>

<style></style>
