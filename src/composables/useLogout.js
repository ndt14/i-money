import { projectAuth } from '../configs/firebases';
import { ref } from 'vue';

const error = ref(null);

async function logOut() {
  error.value = null;
  try {
    const response = await projectAuth.signOut();
    // if (!response) throw new Error('Could not create a new user');
    // await response.user.updateProfile({ displayName: fullName });
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

export function useLogout() {
  return {
    error,
    logOut,
  };
}
