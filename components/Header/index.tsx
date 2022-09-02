import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { RiCloseLine, RiMenu4Fill } from 'react-icons/ri';

import { Logo } from '@components/Logo';
import { BreakpointWrapper } from '@components/shared';
import {
  LogoWrapper,
  MobileMenu,
  MobileWrapper,
  Nav,
  WrapperLeft,
  WrapperRight,
} from './Header.css';
import { Menu } from './Menu';

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
    <BreakpointWrapper>
      <Nav>
        <WrapperLeft>
          <Link href='/' passHref>
            <LogoWrapper whileTap={{ scale: 0.95 }}>
              <Logo theme={themeIcon} />
            </LogoWrapper>
          </Link>
        </WrapperLeft>
        <WrapperRight>
          <Menu
            mobile={false}
            themeIcon={themeIcon}
            toggleTheme={toggleTheme}
          />
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
    </BreakpointWrapper>
  );
};

export default Header;
