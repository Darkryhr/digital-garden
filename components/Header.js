import React from 'react';
import styled from 'styled-components';
import { LinkButton } from './styled/button';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Nav>
      <Link href='/' passHref>
        <LogoWrapper whileHover={{ color: '#fb8b24' }}>
          <Image src='/logo.svg' width={32} height={32} alt='logo' />
          <Logo>
            Gabriel<LogoSpan>AintReal</LogoSpan>
          </Logo>
        </LogoWrapper>
      </Link>
      <Menu>
        <MenuLinks>
          <Link href='/blog' passHref>
            <LinkButton whileHover={{ color: '#fb8b24' }}>Posts</LinkButton>
          </Link>
        </MenuLinks>
        <MenuLinks>
          <LinkButton whileHover={{ color: '#fb8b24' }}>
            <FaSearch />
          </LinkButton>
        </MenuLinks>
      </Menu>
      {/* <Search /> */}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
  padding: 1em;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 28px;
  margin-left: 0.3em;
  line-height: 2;
`;

const LogoSpan = styled.span`
  font-weight: 500;
  opacity: 0.6;

  line-height: 2;
`;

const LogoWrapper = styled(motion.div)`
  display: flex;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuLinks = styled.li`
  margin-right: 2em;
  &:last-child {
    margin-right: 0;
  }
`;

const Search = () => {
  return (
    <Overlay>
      <InputWrapper>
        <SearchForm>
          <Input />
          <FaSearch />
        </SearchForm>
      </InputWrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const Input = styled.input`
  padding: 10px 10px 10px 3px;
  border: none;
  width: 360px;
  background: none;
  font-size: 32px;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  /* background: #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0.7em;
  border-radius: 7px;
`;

const SearchForm = styled.form`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
`;
