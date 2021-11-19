import React from 'react';
import { BiServer, BiDesktop, BiBrush } from 'react-icons/bi';
import { Divider } from './styled';
import { Heading3 } from './styled/typography';
import { ColWrapper, SkillItem, Row } from './styled/LayoutStyles';

const SkillSection = () => {
  const FrontEnd = {};
  const BackEnd = {};
  const Design = {};
  return (
    <Row toCol>
      <ColWrapper>
        <BiDesktop size={100} />
        <Heading3>Frontend</Heading3>
        <Divider />
        <SkillItem>HTML</SkillItem>
        <SkillItem>CSS</SkillItem>
        <SkillItem>React</SkillItem>
        <SkillItem>Angular</SkillItem>
      </ColWrapper>
      <ColWrapper>
        <BiServer size={100} />
        <Heading3>Backend</Heading3>
        <Divider />
        <SkillItem>Node</SkillItem>
        <SkillItem>Express</SkillItem>
        <SkillItem>SQL</SkillItem>
        <SkillItem>NoSQL</SkillItem>
        <SkillItem>Docker</SkillItem>
      </ColWrapper>
      <ColWrapper>
        <BiBrush size={100} />
        <Heading3>Design</Heading3>
        <Divider />
        <SkillItem>Illustrator</SkillItem>
        <SkillItem>Photoshop</SkillItem>
        <SkillItem>Premiere</SkillItem>
        <SkillItem>UI / UX</SkillItem>
      </ColWrapper>
    </Row>
  );
};

export default SkillSection;
