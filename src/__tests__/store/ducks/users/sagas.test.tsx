import { call } from 'redux-saga/effects';
import { loadUsers } from '../../../../store/ducks/users/sagas';

describe('testing sagas - function calls', () => {
  let generator = null;

  beforeAll(() => {
    generator = loadUsers();
  });

  test('should call the loadUsers function', () => {
      const expected = call(loadUsers);
      const actual = generator.next();

      expect(actual.value).toEqual(expected);
  });
});
