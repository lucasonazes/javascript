import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.p`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
