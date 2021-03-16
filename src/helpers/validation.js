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
    .min(8, 'Password length min 8 symbols')
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
    .min(8, 'Password length min 8 symbols')
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

export const confirmPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password length min 8 symbols')
    .max(30, 'Password length max 30 symbols')
    .required('Password is required'),
  passwordConfirm: yup.string().equalTo(yup.ref('password'), 'Passwords must match').required('Required')
});

export const onDisable = (values, isValid, props = true) => {
  const flag = [];
  for (const value in values) {
    if (values[value] === '') {
      flag.push(false);
    }
  }
  return !flag.includes(false) && isValid && props;
};

export const emailRules = [
  {
    required: true,
    type: 'email',
    message:
      'Enter a valid email address!'
  }
];

export const passwordRules = [
  {
    required: true,
    message: 'Please input your password!'
  },
  {
    min: 8,
    message: 'Your password must be at least 8 characters.'
  },
  {
    max: 50,
    message: 'Max password length 50 characters.'
  }
];

export const confirmPassRules = [
  {
    required: true,
    message: 'Please confirm your password!'
  },
  ({ getFieldValue }) => ({
    validator (rule, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('The two passwords that you entered do not match!');
    }
  })
];

export const nameRules = [
  {
    required: true,
    message: 'Is required!'
  },
  {
    min: 8,
    message: 'Field must be at least 8 characters.'
  },
  {
    max: 50,
    message: 'Max length 50 characters.'
  }
];
