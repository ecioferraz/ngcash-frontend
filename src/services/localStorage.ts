import UserInfo from '../types/UserInfo';

const USER_KEY = 'ngcash_user';

export const readUser = () =>
  JSON.parse(localStorage.getItem(USER_KEY) as string);

export const removeUser = () => localStorage.removeItem(USER_KEY);

export const saveUser = (userInfo: UserInfo) =>
  localStorage.setItem(USER_KEY, JSON.stringify(userInfo));
