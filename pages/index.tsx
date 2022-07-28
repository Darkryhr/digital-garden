import SectionWrapper from '@components/SectionWrapper';
import IntroSection from 'containers/IntroSection';
import { BreakpointWrapper } from '@components/shared';

export default function Home() {
  return (
    <BreakpointWrapper>
      <SectionWrapper delay={0.1}>
        <IntroSection />
      </SectionWrapper>
    </BreakpointWrapper>
  );
}
