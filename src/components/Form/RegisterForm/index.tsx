import Input from '../Input';
import { useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { useContext } from 'react';
import { useUserContext } from '../../../hooks/useUserContext';
import { IUserRegister } from '../../../type';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormRegisterSchema } from './formRegisterSchema';

const RegisterForm = () => {
  const { userRegister } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(FormRegisterSchema),
  });
  return (
    <StyledForm onSubmit={handleSubmit(userRegister)}>
      <Input
        label='Nome'
        register={register('name')}
        type='text'
        error={errors.name}
      />
      <Input
        label='Email'
        register={register('email')}
        type='email'
        error={errors.email}
      />
      <Input
        label='Senha'
        register={register('password')}
        type='password'
        error={errors.password}
      />
      <Input
        label='Confirme a senha'
        register={register('confirmPassword')}
        type='password'
        error={errors.confirmPassword}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
