import { readUser, removeUser, saveUser, USER_KEY } from '../localStorage';
import userMock from './mocks';

describe('localStorage', () => {
  it('should save a new user', () => {
    jest.spyOn(Storage.prototype, 'setItem');

    saveUser(userMock);

    expect(JSON.parse(localStorage.getItem(USER_KEY) as string)).toBeDefined();
  });

  it('should read a saved user', () => {
    jest.spyOn(Storage.prototype, 'getItem');

    const user = readUser();

    expect(user).toStrictEqual(userMock);
  });

  it('should remove an user', () => {
    jest.spyOn(Storage.prototype, 'removeItem');

    removeUser();

    expect(JSON.parse(localStorage.getItem(USER_KEY) as string)).toBeNull();
  });
});
