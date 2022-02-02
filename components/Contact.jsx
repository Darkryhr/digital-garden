import { motion } from 'framer-motion';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { Column } from './styled/LayoutStyles';
import { Heading3, Subtitle } from './styled/typography';
import useDarkMode from './useDarkMode';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(theme);
    setLoading(true);

    const loadingToast = toast.loading('Sending...');
    let data = {
      name,
      email,
      message,
    };
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setName('');
      setEmail('');
      setMessage('');
      toast.dismiss(loadingToast);
    } else {
      toast.error('Oops! looks like something went wrong...', {
        id: loadingToast,
      });
    }

    setLoading(false);
    toast.success('Thank You!', {
      id: loadingToast,
      style: {
        borderRadius: '10px',
        background: `${theme === 'dark' ? '#181818' : '#F5F5F5'}`,
        color: '#fb8b24',
        border: `1px solid ${theme === 'dark' ? '#333333' : '#E0E0E0'}`,
      },
    });
  };

  return (
    <Column>
      <Form>
        <Shout>give me a shout</Shout>
        <Wrapper>
          <InputContainer>
            <Input
              type='text'
              placeholder='Your name...'
              name='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type='text'
              placeholder='Your E-mail...'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
        </Wrapper>
        <AreaContainer>
          <TextArea
            cols='30'
            rows='3'
            placeholder='What do you have to say for yourself...'
            name='message'
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </AreaContainer>
        <Submit
          type='submit'
          onClick={(e) => {
            handleSubmit(e);
          }}
          disabled={loading || !name || !email}
        >
          {loading ? 'Sending...' : 'Send'}
        </Submit>
      </Form>
    </Column>
  );
};

export default Contact;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 714px;
  padding: 2rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const InputContainer = styled.div`
  width: 20rem;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.7rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Input = styled(motion.input)`
  outline: none;
  border: none;
  background: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const Shout = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.3rem;
`;

const AreaContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  padding: 0.7rem 1rem;
`;

const TextArea = styled.textarea`
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;

const Submit = styled(motion.button)`
  background: none;
  padding: 1rem 0;
  background: black;
  color: white;
  width: 100%;
  margin: 0.7rem 0;
  cursor: pointer;
  &:disabled {
    cursor: default;
    filter: brightness(40%);
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
