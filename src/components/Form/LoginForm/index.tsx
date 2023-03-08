import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import { IUserLogin } from '../../../type';
import { useUserContext } from '../../../hooks/useUserContext';

const LoginForm = () => {
  const { userLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({});

  return (
    <StyledForm onSubmit={handleSubmit(userLogin)}>
      <Input label='Email' register={register('email')} type='email' />
      <Input label='Senha' register={register('password')} type='password' />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
