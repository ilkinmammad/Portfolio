import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string()
    .required().min(4),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required()
});

export default schema;
