import styled from 'styled-components';

import SectionWrapper from '@components/SectionWrapper';
import IntroSection from 'containers/IntroSection';
import { breakpoint } from '@styled/breakpoints.css';

export default function Home() {
  return (
    <Deflow>
      <CoolThing>
        UI &amp; UX DESIGN
        <br />
        WEB DEVELOPER
      </CoolThing>
      <SectionWrapper delay={0.1}>
        <IntroSection />
      </SectionWrapper>
    </Deflow>
  );
}

const Deflow = styled.div`
  position: relative;
  overflow: hidden;
`;

const CoolThing = styled.h1`
  font-weight: 800;
  position: absolute;
  opacity: 0.03;
  letter-spacing: 1px;
  font-size: 15rem;
  z-index: -999;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 180px;
  text-align: end;
  /* transform: rotate(-90deg); */
  /* top: 0; */
  @media (${breakpoint.device.sm}) {
    opacity: 0;
  }
`;
