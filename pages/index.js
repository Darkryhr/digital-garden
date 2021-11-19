import SectionWrapper from '@components/section-wrapper';
import AboutSection from '@components/about-section';
import BioSection from '@components/bio-section';
import SkillSection from '@components/skills-section';
import { StrokedButton } from '@components/styled/button';

export default function Home() {
  return (
    <>
      <SectionWrapper delay={0.1}>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <BioSection />
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <StrokedButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Resume
        </StrokedButton>
      </SectionWrapper>
      <SectionWrapper delay={0.4}>
        <SkillSection />
      </SectionWrapper>
    </>
  );
}
