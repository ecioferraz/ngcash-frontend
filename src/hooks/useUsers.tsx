import { useEffect, useState } from 'react';
import requestApi from '../api/axios';
import { readUser } from '../services/localStorage';
import UserInfo from '../types/UserInfo';

export default function useUsers() {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { username, token } = readUser();
        const { data } = await requestApi({
          endpoint: 'users',
          method: 'get',
          token,
        });

        const usernames = data.reduce((acc: string[], user: UserInfo) => {
          if (user.username !== username) acc.push(user.username);
          return acc;
        }, []);

        setUsers(usernames);
      } catch (err) {
        return;
      }
    };

    getUsers();
  }, []);

  return { users };
}
