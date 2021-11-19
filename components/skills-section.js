import React from 'react';
import { BiServer, BiDesktop, BiBrush } from 'react-icons/bi';
import { Divider, Row } from './styled';
import { Subtitle } from './styled/typography';
import { SkillItem, SkillList, SkillWrapper } from './styled/LayoutStyles';

const SkillSection = () => {
  return (
    <Row toCol>
      <SkillWrapper>
        <BiDesktop size={100} />
        <Subtitle>Frontend</Subtitle>
        <Divider />
        <SkillList>
          <SkillItem>HTML</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Angular</SkillItem>
        </SkillList>
      </SkillWrapper>
      <SkillWrapper>
        <BiServer size={100} />
        <Subtitle>Backend</Subtitle>
        <Divider />
        <SkillList>
          <SkillItem>Node</SkillItem>
          <SkillItem>Express</SkillItem>
          <SkillItem>SQL</SkillItem>
          <SkillItem>NoSQL</SkillItem>
          <SkillItem>Docker</SkillItem>
        </SkillList>
      </SkillWrapper>
      <SkillWrapper>
        <BiBrush size={100} />
        <Subtitle>Design</Subtitle>
        <Divider />

        <SkillList>
          <SkillItem>Illustrator</SkillItem>
          <SkillItem>Photoshop</SkillItem>
          <SkillItem>Premiere</SkillItem>
          <SkillItem>UI / UX</SkillItem>
        </SkillList>
      </SkillWrapper>
    </Row>
  );
};

export default SkillSection;
