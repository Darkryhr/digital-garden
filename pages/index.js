import SectionWrapper from '@components/styled/section-wrapper';
import AboutSection from '@components/about-section';
import Image from 'next/image';
import styled from 'styled-components';
import BioSection from '@components/bio-section';

export default function Home() {
  return (
    <>
      <SectionWrapper delay={0.1}>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <BioSection />
      </SectionWrapper>
    </>
  );
}
