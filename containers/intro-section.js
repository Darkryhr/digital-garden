import { Container } from '@components/styled/LayoutStyles';
import { Heading1, Subtitle } from '@components/styled/typography';
import React, { useState, useEffect } from 'react';

const IntroSection = () => {
  return (
    <Container p='0 0 6.5rem 0'>
      <Heading1>Gabriel Lellouche</Heading1>
      <Subtitle>Let&apos;s be unboring</Subtitle>
    </Container>
  );
};

export default IntroSection;
