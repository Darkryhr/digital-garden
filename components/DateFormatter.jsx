import { parseISO, format } from 'date-fns';
import styled from 'styled-components';
import { BiTimeFive } from 'react-icons/bi';

import { breakpoint } from '@styled/breakpoints.css';

const DateFormatter = ({ dateString, light }) => {
  const date = parseISO(dateString);
  return (
    <Time dateTime={dateString} $light={light}>
      <BiTimeFive
        size={20}
        style={{
          opacity: 0.5,
          marginRight: '7px',
        }}
      />
      {format(date, 'MMMM dd, yyyy')}
    </Time>
  );
};

export default DateFormatter;

const Time = styled.time`
  font-weight: ${props => (props.$light ? 400 : 700)};
  opacity: ${props => (props.$light ? 0.8 : 1)};
  font-size: ${props => (props.$light ? '0.9rem' : '1rem')};
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  @media (${breakpoint.device.sm}) {
    font-size: 0.8rem;
  }
`;
