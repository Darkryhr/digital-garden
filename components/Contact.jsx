import { motion } from 'framer-motion';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { Column } from './styled/LayoutStyles';
import { breakpoint } from '@components/styled/breakpoints';
import useDarkMode from './useDarkMode';
import { BiSend } from 'react-icons/bi';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async e => {
    e.preventDefault();
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const { error } = await res.json();
    if (error) {
      toast.error('Oops! looks like something went wrong...', {
        id: loadingToast,
      });
      console.log(error);
      return;
    } else {
      setName('');
      setEmail('');
      setMessage('');
      toast.dismiss(loadingToast);
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
        <Shout>Give me a shout</Shout>
        <Wrapper>
          <InputContainer>
            <Input
              type='text'
              placeholder='Your name...'
              name='name'
              value={name}
              onChange={e => {
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
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
        </Wrapper>
        <AreaContainer>
          <TextArea
            cols='30'
            rows='2'
            placeholder='What do you have to say for yourself...'
            name='message'
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
          />
        </AreaContainer>
        <SubmitWrapper>
          <Submit
            type='submit'
            onClick={e => {
              handleSubmit(e);
            }}
            disabled={loading || !name || !emailRegEx.test(email) || !message}
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                Send
                <BiSend
                  size={20}
                  style={{
                    fill: 'white',
                  }}
                />
              </>
            )}{' '}
          </Submit>
          <div>
            <strong>/ email me: </strong>
            <EmailLink href='mailto:info@gabriel-lellouche.com'>
              info@gabriel-lellouche.com
            </EmailLink>
          </div>
        </SubmitWrapper>
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

const EmailLink = styled.a`
  padding-top: 0.2rem;
  opacity: 0.8;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media (${breakpoint.device.sm}) {
  }
`;
const InputContainer = styled.div`
  border-radius: 5px;
  width: 45%;
  margin-right: 1rem;
  flex-direction: column;
  padding: 0.7rem 0 0.5rem 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.secondary};
  @media (${breakpoint.device.sm}) {
    width: 100%;
  }
  &:last-child {
    margin-right: 0;
  }
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
  letter-spacing: 0.03rem;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.3rem;
`;

const AreaContainer = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.7rem 0 0.5rem 1rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.secondary};
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
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  margin: 0.7rem 0;
  display: flex;
  align-items: center;
  width: 150px;
  font-weight: 600;
  border-radius: 5px;
  justify-content: space-around;
  cursor: pointer;
  &:disabled {
    cursor: default;
    filter: brightness(70%);
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const SubmitWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
