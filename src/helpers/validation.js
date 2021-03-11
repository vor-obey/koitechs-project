const yup = require('yup');

function equalTo (ref, msg) {
  return yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '',
    params: {
      reference: ref.path
    },
    test: function (value) {
      return value === this.resolve(ref);
    }
  });
}
yup.addMethod(yup.string, 'equalTo', equalTo);

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password length min 6 symbols')
    .max(30, 'Password length max 30 symbols')
    .required('Password is required')
});

export const signUpValidation = yup.object().shape({
  firstName: yup
    .string()
    .required('Required')
    .min(2, 'First name length min 2 symbols')
    .max(30, 'First name length max 30 symbols'),
  lastName: yup
    .string()
    .required('Required')
    .min(2, 'Last name length min 2 symbols')
    .max(30, 'Last name length max 30 symbols'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .min(6, 'Password length min 6 symbols')
    .max(30, 'Password length max 30 symbols')
    .required('Password is required'),
  passwordConfirm: yup.string().equalTo(yup.ref('password'), 'Passwords must match').required('Required'),
  phone: yup.string().required('Required')
});

export const forgotPasswordValidation = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
});

export const nameValidation = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name length min 2 symbols')
    .max(30, 'Name length max 30 symbols')
    .required('Required')
});

export const emailValidation = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required')
});
