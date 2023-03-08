import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface iInputProps {
  label: string;
  error?: any;
  register?: any;
  type: string;
}

const Input = ({ label, error, register, type }: iInputProps) => {
  return (
    <fieldset>
      <StyledTextField id={register} label={label} type={type} {...register} />
      <StyledParagraph fontColor='red'>{error}</StyledParagraph>
    </fieldset>
  );
};

export default Input;
