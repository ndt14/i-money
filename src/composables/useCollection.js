import { projectFirestore } from '../configs/firebases';
import { ref } from 'vue';

const useCollection = (name) => {
  const error = ref(null);

  async function addRecord(record) {
    error.value = null;
    try {
      const response = await projectFirestore.collection(name).add(record);

      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }
  return {
    addRecord,
    error,
  };
};

export default useCollection;
