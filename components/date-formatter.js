import { parseISO, format } from 'date-fns';
import styled from 'styled-components';

const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString);
  return <Time dateTime={dateString}>{format(date, 'dd/MM/yyyy')}</Time>;
};

export default DateFormatter;

const Time = styled.time`
  opacity: 0.7;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  padding-top: 1rem;
`;
