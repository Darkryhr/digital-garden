import { parseISO, format } from 'date-fns';
import styled from 'styled-components';
import { BiTimeFive } from 'react-icons/bi';

const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <Time dateTime={dateString}>
      <BiTimeFive
        size={23}
        style={{
          opacity: 0.5,
        }}
      />{' '}
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
  width: 160px;
  align-items: center;
  justify-content: space-between;
`;
