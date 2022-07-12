import styled from 'styled-components';

import SectionWrapper from '@components/SectionWrapper';
import IntroSection from 'containers/IntroSection';

export default function Home() {
  return (
    <Deflow>
      <SectionWrapper delay={0.1}>
        <IntroSection />
      </SectionWrapper>
    </Deflow>
  );
}

const Deflow = styled.div`
  position: relative;
  /* &::before {
    content: '';
    display: block;
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 80vh;
    background: url('/bg2.png');
    background-size: 1672px;
    background-position: 50%;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -10;
  } */
`;
