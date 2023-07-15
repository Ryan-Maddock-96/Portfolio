import styled from 'styled-components';
import * as vars from './Variables';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  background: transparent;
  padding: 10px 20px;
  border-radius: 0px 5px;
  border: 2px solid ${vars.text_secondary_colour};
  color: ${vars.text_primary_colour};
  font-family: ${vars.family};
  font-size: 18px;
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf}`};

  &:hover {
    box-shadow: 0px 0px 25px 0px rgba(18, 125, 239, 0.3);
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const LinkButton = styled(Button).attrs({ as: Link })`
  text-decoration: none;
  text-align: center;
`;
