import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import PocketBase from 'pocketbase';

// https://usehooks.com/useAuth/

const path = 'http://127.0.0.1:8090';
const pb = new PocketBase(path);

export const useAuth = () => {
  const [token, setToken] = useLocalStorage('token', '');
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signin = async (username, password) => {
    try {
      setServerError(null);
      setIsLoading(true);
      const authData = await pb.collection('users').authWithPassword(username, password);
      setIsLoading(false);
      setToken(authData.token);
    } catch ({ message }) {
      setServerError(message);
      setIsLoading(false);
    }
  };

  const signout = () => {
    setToken(null);
    pb.authStore.clear();
  };

  return {
    token,
    isLoading,
    serverError,
    signin,
    signout
  };
};
