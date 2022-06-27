import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri';

import { Logo } from '@components/Logo';
import { Menu } from './Menu';
import {
  Nav,
  WrapperLeft,
  WrapperRight,
  LogoWrapper,
  MobileWrapper,
  MobileMenu,
} from './Header.css';

const Header = ({ toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState('');
  let ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setThemeIcon(savedTheme);
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Nav>
      <WrapperLeft>
        <Link href='/' passHref>
          <LogoWrapper whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Logo theme={themeIcon} />
          </LogoWrapper>
        </Link>
      </WrapperLeft>
      <WrapperRight>
        <Menu mobile={false} themeIcon={themeIcon} toggleTheme={toggleTheme} />
      </WrapperRight>
      <MobileWrapper ref={ref}>
        {open ? (
          <RiCloseLine
            color={themeIcon === 'dark' ? '#f4f4f4' : '#000000'}
            size={27}
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setOpen(false)}
          />
        ) : (
          <RiMenu4Fill
            color={themeIcon === 'dark' ? '#f4f4f4' : '#000000'}
            size={27}
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setOpen(true)}
          />
        )}{' '}
        {/* 
      // @ts-ignore */}
        <AnimatePresence>
          {open && (
            <MobileMenu
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              onClick={() => setOpen(false)}
            >
              <Menu mobile toggleTheme={toggleTheme} themeIcon={themeIcon} />
            </MobileMenu>
          )}
        </AnimatePresence>
      </MobileWrapper>
    </Nav>
  );
};

export default Header;
