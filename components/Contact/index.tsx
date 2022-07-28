import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDarkMode } from '../../hooks/useDarkMode';
import { BiSend } from 'react-icons/bi';

import {
  Input,
  InputContainer,
  TextArea,
  AreaContainer,
  Submit,
  SubmitWrapper,
  Span,
  OrEmail,
  Shout,
  EmailLink,
  CustomColumn,
  Form,
  Wrapper,
} from './Contact.css';

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
    <CustomColumn $end>
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
                <BiSend
                  size={20}
                  style={{
                    fill: 'white',
                  }}
                />
                Send
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
    </CustomColumn>
  );
};

export default Contact;
