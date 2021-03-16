export default class UserService {
  static authUserService = async (data) => {
    console.log(data);
    const { email, password } = data;
    const user = {
      id: 1,
      email: 'Irakli@gmail.com',
      password: '12345678'
    };
    if (email === user.email && password === user.password) {
      return ({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
        user: {
          id: 1,
          name: 'Irakli',
          username: 'Bret',
          email: 'Irakli@gmail.com',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496'
            }
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
          }
        }
      });
    } else { return null; }
  };

  static getUserService = async () => {
    return Promise.resolve({
      id: 1,
      name: 'Irakli',
      username: 'Bret',
      email: 'Irakli@gmail.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    });
  };

  static userService = async (data) => {
    console.log(data);
    return Promise.resolve({
      accessToken: 'accessToken',
      refreshToken: 'refreshToken'
    });
  };

  static userProfileUpdate = async (data) => {
    return data;
  }

  static restorePassword = async (data) => {
    return Promise.resolve('success');
  };

  static resetPassword = async (data) => {
    return Promise.resolve('success');
  };
}
