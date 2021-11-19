import React from 'react';
import styled from 'styled-components';
import { Heading1, Text } from './styled/typography';
import { Divider } from './styled';
import { List, ListItem } from './styled/LayoutStyles';

const BioSection = () => {
  return (
    <>
      <Heading1>Bio</Heading1>
      <Divider />
      <List>
        <ListItem>
          <Year>1998</Year>
          <Text>Born in Ashdod, IL</Text>
        </ListItem>
        <ListItem>
          <Year>2016</Year>
          <Text>Graduated Highschool</Text>
        </ListItem>
        <ListItem>
          <Year>2017</Year>
          <Text>
            Military Draft - Served until <Year inline>2019</Year> in the 601st
            platoon as technical expert &amp; advisor for Combat Engineering
            Armaments, as well as team leader.
          </Text>
        </ListItem>
        <ListItem>
          <Year>2020</Year>
          <Text>John Bryce - Full-Stack Web Development Course</Text>
        </ListItem>
      </List>
    </>
  );
};

export default BioSection;

const Year = styled.span`
  font-weight: 500;
  margin-right: ${(props) => (props.inline ? '0' : '15px')};
`;
