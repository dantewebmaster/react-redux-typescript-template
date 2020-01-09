import { call } from 'redux-saga/effects';
import { loadUsers } from '../../../../store/ducks/users/sagas';
import { getUsers } from '../../../../services/users.service';

describe('testing sagas - function calls', () => {
  let generator = null;

  beforeAll(() => {
    generator = loadUsers();
  });

  test('should call the getUsers function', () => {
      const expected = call(getUsers);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
  });
});
