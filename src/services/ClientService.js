import users from '../mocks/usersMock';

export class ClientService {
  static getUsers () {
    return users;
  }

  static setClient (client) {
    return (
      [{ ...client, id: users.length + 1 }, ...users]);
  }
}
