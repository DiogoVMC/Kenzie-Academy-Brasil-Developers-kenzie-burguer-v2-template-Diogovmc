import * as yup from 'yup';

export const FormRegisterSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigátorio'),
  email: yup
    .string()
    .required('O email é obrigatório')
    .email('O email digitado é inválido.'),
  password: yup
    .string()
    .required('A senha é obrigátoria')
    .min(6, 'A senha precisa ter no mínimo 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirmar a senha é obrigatório')
    .oneOf([yup.ref('password')], 'As senhas não correspondem'),
});
