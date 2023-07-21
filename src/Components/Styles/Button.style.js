import styled from 'styled-components';
import * as vars from './Variables';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  position: relative;
  background: transparent;
  padding: 10px 20px;
  border-radius: 0px 5px;
  border: 2px solid ${vars.text_secondary_colour};
  color: ${vars.text_primary_colour};
  font-family: ${vars.family};
  font-size: 1rem;
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf}`};

  &:hover {
    cursor: pointer;

    &:before {
      content: '';
      border: 4px solid ${vars.text_secondary_colour};
      border-radius: 0px 5px;
      height: 100%;
      width: 100%;
      position: absolute;
      top: -2px;
      left: -2px;
    }
  }
`;

export const DownloadButton = styled(Button).attrs({ as: 'a' })`
  text-decoration: none;
  text-align: center;
`;

export const LinkButton = styled(Button).attrs({ as: Link })`
  text-decoration: none;
  text-align: center;
`;
