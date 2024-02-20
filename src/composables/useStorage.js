import { useUser } from '@/composables/useUser';
import { projectStorage } from '../configs/firebases';
import { ref } from 'vue';

const { getUser } = useUser();
const { user } = getUser();
const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref('');
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const fileFef = projectStorage.ref(filePath.value);
    try {
      const response = await fileFef.put(file);
      url.value = await response.ref.getDownloadURL();
      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }
  return {
    uploadFile,
    filePath,
    url,
    error,
  };
};

export default useStorage;
