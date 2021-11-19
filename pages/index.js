import SectionWrapper from '@components/section-wrapper';
import AboutSection from '@components/about-section';
import BioSection from '@components/bio-section';
import SkillSection from '@components/skills-section';

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
        <SkillSection />
      </SectionWrapper>
    </>
  );
}
