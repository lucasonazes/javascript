import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>Hi!</small>
      </Title>
      <Paragraph>Lorem Ipsum dolor sit amet.</Paragraph>
      <button type="button">Send</button>
    </Container>
  );
}
