import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IconButton, LinkButton } from './styled/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiMenuAltRight, BiSun, BiMoon } from 'react-icons/bi';

const Header = ({ toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState(false);
  let ref = useRef(null);
  const handleClick = () => setOpen(!open);
  const LinkClick = () => setOpen(false);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setThemeIcon(savedTheme);
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });
  return (
    <Nav>
      <Link href='/' passHref>
        <LogoWrapper whileHover={{ color: '#fb8b24' }} onClick={LinkClick}>
          <Image src='/logo.svg' width={32} height={32} alt='logo' />
          <Logo>
            Gabriel<LogoSpan>AintReal</LogoSpan>
          </Logo>
        </LogoWrapper>
      </Link>
      <MobileButton ref={ref} onClick={handleClick}>
        <BiMenuAltRight size={36} />
      </MobileButton>
      <Menu open={open}>
        <MenuLinks>
          <Link href='/portfolio' passHref>
            <LinkButton whileHover={{ color: '#fb8b24' }} onClick={LinkClick}>
              Projects
            </LinkButton>
          </Link>
        </MenuLinks>
        <MenuLinks>
          <Link href='/blog' passHref>
            <LinkButton whileHover={{ color: '#fb8b24' }} onClick={LinkClick}>
              Blog
            </LinkButton>
          </Link>
        </MenuLinks>
        <MenuLinks>
          <LinkButton whileHover={{ color: '#fb8b24' }} onClick={toggleTheme}>
            {themeIcon === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
          </LinkButton>
        </MenuLinks>
      </Menu>
    </Nav>
  );
};

export default Header;

const MobileButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 33px;
  padding-right: 10px;
  &:focus {
    outline: none;
  }
  @media (min-width: 426px) {
    display: none;
  }
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1em;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 28px;
  margin-left: 0.3em;
  line-height: 2;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
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
  @media (max-width: 426px) {
    /* display: none; */
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${(props) => props.theme.colors.primary};
    padding-bottom: 1em;
    position: absolute;
    left: 0;
    top: 100px;
    border-bottom: 1px solid gray;
  }
`;

const MenuLinks = styled.li`
  margin-left: 2em;
  @media (max-width: 426px) {
    margin: 0;
    padding: 0.75em 0;
  }
`;
