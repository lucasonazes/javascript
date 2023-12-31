import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clickedButtonRequest());
  }

  return (
    <Container>
      <Title>Amazon</Title>
      <Paragraph>Click here to subscribe</Paragraph>
      <button type="button" onClick={handleClick}>
        Send
      </button>
    </Container>
  );
}
