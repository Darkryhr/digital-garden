import { parseISO, format } from 'date-fns';
import styled from 'styled-components';
import { BiTimeFive } from 'react-icons/bi';

const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <Time dateTime={dateString}>
      <BiTimeFive
        size={20}
        style={{
          opacity: 0.5,
          marginRight: '5px',
        }}
      />
      {format(date, 'MMMM dd, yyyy')}
    </Time>
  );
};

export default DateFormatter;

const Time = styled.time`
  font-weight: 600;
  letter-spacing: 0.05rem;
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
`;
