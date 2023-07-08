import styled, { css } from 'styled-components';
import * as vars from './Variables';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const InputHolder = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  gap: 100px;

  ${InputHolder} {
    flex-grow: 1;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const DefaultInputStyles = css`
  background: ${vars.text_primary_colour};
  border-radius: 5px;
  resize: none;
  font-size: 24px;
  width: 100%;
  outline: none;
  padding: 5px 10px;
  color: ${vars.secondary_colour};
  font-family: 'Poppins', sans-serif;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  height: 50px;
  ${DefaultInputStyles}
`;

export const StyledTextArea = styled.textarea`
  min-height: 200px;
  ${DefaultInputStyles}
`;
