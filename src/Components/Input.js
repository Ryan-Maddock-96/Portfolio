import { InputHolder, StyledInput, StyledTextArea, InputLabel } from './Styles/Forms';

// eslint-disable-next-line react/prop-types
function Input({ type, name, labelText }) {
  return (
    <InputHolder>
      <InputLabel>{labelText}</InputLabel>
      {type != 'textarea' ? (
        <StyledInput type={type} name={name} aria-label={labelText} />
      ) : (
        <StyledTextArea name={name} aria-label={labelText} />
      )}
    </InputHolder>
  );
}

export default Input;
