import { projectAuth } from '../configs/firebases';
import { ref } from 'vue';

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(email, password);
    // if (!response) throw new Error('Could not create a new user');
    // await response.user.updateProfile({ displayName: fullName });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return {
    error,
    isPending,
    signIn,
  };
}
