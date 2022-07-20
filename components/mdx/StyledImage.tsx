import styled from 'styled-components';
import Image from 'next/image';

const ImageStyles = styled.div`
  span {
    overflow: visible !important;
  }
  img {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  }
`;

export const StyledImage = props => (
  <ImageStyles>
    <Image alt={props.alt} {...props} objectFit='contain' />
  </ImageStyles>
);
