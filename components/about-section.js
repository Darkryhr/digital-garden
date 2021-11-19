import React from 'react';
import { Divider } from './styled';
import { Heading1, Subtitle, Text } from './styled/typography';

const AboutSection = () => {
  return (
    <>
      <Heading1>Hi, I&apos;m Gabriel</Heading1>
      <Subtitle>Developer / Designer</Subtitle>
      <Divider />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae eros
        fringilla, lobortis neque vel, luctus est. Praesent ac tortor mattis,
        porttitor massa et, fermentum nisi. Praesent ut metus tellus. Ut semper
        porta sagittis. Praesent a nisl in felis interdum pharetra sed eget
        ante. Mauris iaculis metus malesuada, pulvinar enim vitae, malesuada
        felis. In ac posuere justo, at aliquam lacus. Vivamus vitae aliquet
        odio. Nunc tempus mi nec orci ullamcorper, ut congue orci venenatis.
        Cras sagittis vulputate consequat. Nullam nisl ipsum, ultrices sed eros
        in, pellentesque sodales justo. Curabitur nisl massa, condimentum nec
        urna quis, dignissim congue leo. Integer vitae tincidunt felis. Cras at
        finibus justo, quis semper orci.
      </Text>
    </>
  );
};

export default AboutSection;
