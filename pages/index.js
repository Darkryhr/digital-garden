import styled from 'styled-components';

import SectionWrapper from '@components/SectionWrapper';
import IntroSection from 'containers/IntroSection';
import { breakpoint } from '@styled/breakpoints.css';

export default function Home() {
  return (
    <Deflow>
      {/* <CoolThing>
        UI &amp; UX DESIGN
        <br />
        WEB DEVELOPER
      </CoolThing> */}
      <SectionWrapper delay={0.1}>
        <IntroSection />
      </SectionWrapper>
    </Deflow>
  );
}

const Deflow = styled.div`
  position: relative;
  overflow: hidden;
  /* height: 100%;
  opacity: 50%;

   background: linear-gradient(175deg, #1c1d21 50%, #212a30 50%);*/
`;

export const Split = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 50%;
  background: linear-gradient(100deg, #212a30 50%, #1c1d21 50%);
`;

export const Split2 = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(175deg, #1c1d21 50%, #212a30 50%);
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
