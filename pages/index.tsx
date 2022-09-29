import SectionWrapper from '@components/SectionWrapper';
import { BreakpointWrapper } from '@components/shared';
import HelloSection from 'containers/HelloSection';
import IntroSection from 'containers/IntroSection';

export default function Home() {
  return (
    <>
      <BreakpointWrapper>
        <SectionWrapper delay={0.1}>
          <IntroSection />
        </SectionWrapper>
      </BreakpointWrapper>
      <HelloSection />
    </>
  );
}
