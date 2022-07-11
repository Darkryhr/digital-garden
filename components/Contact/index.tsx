import { motion } from 'framer-motion';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

import { Column } from '@components/shared';
import { useDarkMode } from '../../hooks/useDarkMode';
import { BiSend } from 'react-icons/bi';
import { breakpoint } from '@styled/breakpoints.css';

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
    <Column $end>
      <Form>
        <Shout>Give me a shout</Shout>
        <Wrapper>
          <InputContainer>
            <Input
              type='text'
              placeholder='Your name'
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
              placeholder='Your E-mail'
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
            cols={30}
            rows={2}
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
          <Span>or</Span>
          <OrEmail>
            <strong>email me: </strong>
            <EmailLink href='mailto:info@gabriel-lellouche.com'>
              info@gabriel-lellouche.com
            </EmailLink>
          </OrEmail>
        </SubmitWrapper>
      </Form>
    </Column>
  );
};

export default Contact;

const Span = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  font-weight: 500;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  margin: 0 1rem;
  @media (${breakpoint.device.sm}) {
    margin: 1rem 0 0 0;
  }
`;

const OrEmail = styled.div`
  padding: 0;
  margin: 0;
  text-align: end;
  width: fit-content;
  max-width: 125px;
  @media (${breakpoint.device.sm}) {
    padding-top: 1rem;
    text-align: center;
    max-width: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 550px;
  padding: 2rem 0;
  /* min-width: 530px; */
  @media (${breakpoint.device.sm}) {
    padding: 0 2rem;
  }
`;

const EmailLink = styled.a`
  padding-top: 0.2rem;
  opacity: 0.8;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  @media (${breakpoint.device.sm}) {
  }
`;
const InputContainer = styled.div`
  border-radius: 5px;
  width: 49%;
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
  text-overflow: ellipsis;
`;

const Shout = styled.h4`
  letter-spacing: 0.03rem;
  font-size: 1.2rem;
  font-weight: 700;
  padding-bottom: 2rem;
  text-align: start;
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
  width: 100%;
  max-width: 125px;
  font-weight: 600;
  border-radius: 5px;
  justify-content: space-around;
  border: none;
  outline: none;
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
  @media (${breakpoint.device.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`;