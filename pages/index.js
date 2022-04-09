import SectionWrapper from '@components/section-wrapper';
import IntroSection from 'containers/intro-section';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <CoolThing>
        UI &amp; UX DESIGN
        <br />
        WEB DEVELOPER
      </CoolThing>
      <SectionWrapper delay={0.1}>
        <IntroSection />
      </SectionWrapper>
    </>
  );
}

const CoolThing = styled.h1`
  font-weight: 800;
  position: absolute;
  opacity: 0.03;
  letter-spacing: 1px;
  z-index: -2;
  font-size: 15rem;
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
`;
