import SectionWrapper from '@components/section-wrapper';
import IntroSection from 'containers/intro-section';

export default function Home() {
  return (
    <>
      <SectionWrapper delay={0.1}>
        <IntroSection />
      </SectionWrapper>
    </>
  );
}
