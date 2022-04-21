import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BiSun, BiMoon } from 'react-icons/bi';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {
  Nav,
  WrapperLeft,
  WrapperRight,
  LogoWrapper,
  MobileWrapper,
  MobileMenu,
  MenuStyles,
  LinkWrapper,
  LinkStyled,
} from './HeaderStyles';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Header = ({ toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState(false);
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
          <LogoWrapper>
            <Logo theme={themeIcon} />
          </LogoWrapper>
        </Link>
      </WrapperLeft>
      <WrapperRight>
        <Menu $mobile={false} themeIcon={themeIcon} toggleTheme={toggleTheme} />
      </WrapperRight>
      <MobileWrapper ref={ref}>
        {open ? (
          <RiCloseLine
            color={themeIcon === 'dark' ? '#f4f4f4' : '#000000'}
            size={27}
            onClick={() => setOpen(false)}
          />
        ) : (
          <RiMenu3Line
            color={themeIcon === 'dark' ? '#f4f4f4' : '#000000'}
            size={27}
            onClick={() => setOpen(true)}
          />
        )}
        <AnimatePresence>
          {open && (
            <MobileMenu
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
              onClick={() => setOpen(false)}
            >
              <Menu mobile toggleTheme={toggleTheme} />
            </MobileMenu>
          )}
        </AnimatePresence>
      </MobileWrapper>
    </Nav>
  );
};

export default Header;

const Menu = ({ mobile, themeIcon, toggleTheme }) => {
  const router = useRouter();
  return (
    <MenuStyles $mobile={mobile}>
      <LinkWrapper
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        currentTheme={themeIcon}
        $active={router.pathname.includes('/blog') ? true : false}
      >
        <Link href='/blog'>Blog</Link>
      </LinkWrapper>
      <LinkWrapper
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        currentTheme={themeIcon}
        $active={router.pathname == '/portfolio' ? true : false}
      >
        <Link href='/portfolio' passHref>
          Portfolio
        </Link>
      </LinkWrapper>
      <LinkWrapper onClick={() => toggleTheme()} whileHover={{ scale: 1.1 }}>
        {themeIcon === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
      </LinkWrapper>
    </MenuStyles>
  );
};

const Logo = ({ theme }) => {
  return (
    <svg
      version='1.2'
      width='100%'
      height='auto'
      fill={theme === 'dark' || !theme ? '#f4f4f4' : '#000000'}
      viewBox='0 0 4134.483 1403.448'
    >
      <g>
        <polygon
          points='2150.861,1186.387 1285.557,1186.387 1285.557,235.061 2150.861,235.061 2150.861,462.772 1513.268,462.772 
		1513.268,958.676 1923.149,958.676 1923.149,832.8 1634.716,832.8 1634.716,605.089 2150.861,605.089 	'
        />
        <path
          d='M4134.483,1186.387h-865.304V235.061h743.854v423.432l121.449,23.266V1186.387z M3496.89,958.676h409.881v-88.688
		l-409.881-78.526V958.676z M3496.89,559.609l288.431,55.257V462.772H3496.89V559.609z'
        />
        <path
          d='M2277.369,235.061v951.326h227.712V995.648l409.877-132.594v323.333h227.711V235.061H2277.369z M2505.081,756.321V462.772
		h409.877v160.953L2505.081,756.321z'
        />
      </g>
      <g>
        <g>
          <path
            d='M398.611,1080.406c-0.104-0.104-0.207-0.207-0.328-0.328c-13.542-13.87-25.066-29.759-33.813-47.252
			c-8.85,17.493-20.27,33.381-33.813,47.131c0,0-0.104,0-0.207,0.104c-1.811,1.811-3.623,3.623-5.434,5.331
			c-8.746,9.488-13.974,22.082-13.974,35.831c0,29.431,23.893,53.324,53.324,53.324c29.534,0,53.324-23.893,53.324-53.324
			c0-13.749-5.227-26.343-13.87-35.831C402.131,1083.822,400.319,1082.114,398.611,1080.406z'
          />
          <path
            d='M562.241,1080.406c-0.104-0.104-0.207-0.207-0.328-0.328c-13.542-13.87-25.066-29.759-33.813-47.252
			c-8.85,17.493-20.27,33.381-33.813,47.131c0,0-0.104,0-0.207,0.104c-1.811,1.811-3.623,3.623-5.434,5.331
			c-8.746,9.488-13.974,22.082-13.974,35.831c0,29.431,23.893,53.324,53.324,53.324c29.534,0,53.324-23.893,53.324-53.324
			c0-13.749-5.227-26.343-13.87-35.831C565.76,1083.822,563.949,1082.114,562.241,1080.406z'
          />
          <path
            d='M722.006,1080.406c-0.104-0.104-0.207-0.207-0.328-0.328c-13.542-13.87-25.066-29.759-33.813-47.252
			c-8.85,17.493-20.27,33.381-33.813,47.131c0,0-0.104,0-0.207,0.104c-1.811,1.811-3.623,3.623-5.434,5.331
			c-8.746,9.488-13.974,22.082-13.974,35.831c0,29.431,23.893,53.324,53.324,53.324c29.534,0,53.324-23.893,53.324-53.324
			c0-13.749-5.227-26.343-13.87-35.831C725.525,1083.822,723.714,1082.114,722.006,1080.406z'
          />
        </g>
        <path
          d='M527.997,72.891h-0.052c-2.484,0-4.934,0.052-7.47,0.052C249.577,76.669,28.207,285.583,2.485,549.46
		c-1.829,18.873-2.674,37.953-2.45,57.309c0.138,13.698,0.845,27.326,2.053,40.799c5.296,60.88,21.098,119.604,46.009,173.859
		c25.411,55.308,60.345,106.044,103.543,149.828c16.872,17.131,34.969,33.192,54.29,48.062l0.483,102.835
		c0,6.4,0.794,12.594,2.277,18.597c5.296,45.216,29.5,84.687,64.434,110.305c12.818,9.471,27.102,16.993,42.404,22.289
		c16.372,5.658,33.899,8.729,52.151,8.729c10.851,0,21.443-1.069,31.725-3.157c17.303-3.519,33.588-9.781,48.459-18.373
		c23.583,13.663,50.995,21.53,80.133,21.53c29.155,0,56.55-7.884,80.098-21.53c8.367,4.813,17.217,8.936,26.481,12.231
		c16.82,6.003,34.882,9.298,53.703,9.298c24.204,0,47.217-5.382,67.763-15.043c26.653-12.507,49.305-32.122,65.417-56.429
		c13.749-20.477,22.875-44.233,25.894-69.868c1.38-5.917,2.174-12.197,2.174-18.597l0.397-75.371l0.138-27.412
		c93.882-72.18,159.748-172.514,188.937-285.148c11.162-42.939,16.958-87.654,16.958-133.319
		C1055.975,309.804,819.148,72.891,527.997,72.891z M770.206,977.795l-0.621,138.304l-0.052,5.779h-1.156
		c0,44.267-35.866,80.133-80.098,80.133c-44.267,0-80.184-35.866-80.184-80.133c0,44.267-35.866,80.133-80.098,80.133
		c-44.267,0-80.133-35.866-80.133-80.133c0,44.267-35.917,80.133-80.184,80.133c-44.233,0-80.098-35.866-80.098-80.133h-1.156
		l-0.587-144.084C163.302,898.904,81.824,762.032,80.082,605.924c-0.483-43.111,5.244-84.946,16.372-124.641
		c21.668-77.7,63.951-147.154,120.553-201.927l29.414,29.103l-45.337,49.667l-12.145,13.353l8.591,9.747l11.8,13.353l70.437,79.874
		l-45.475-95.9l52.289-30.483l54.549,53.893l15.043,14.819l13.266-13.387l71.369-72.266l74.215,209.898l-55.981-238.242
		l-4.675-19.977l-17.131,13.836l-78.356,63.727l-59.276-72.835l-37.643-46.285c72.835-54.238,162.543-86.912,259.651-88.241
		c2.139,0,4.278-0.086,6.366-0.086c222.526,0,407.15,162.232,442.049,374.89c3.916,23.755,5.969,48.183,5.969,73.111
		C975.963,759.047,893.95,898.111,770.206,977.795z'
        />
        <g>
          <path
            d='M443.241,612.566c-2.933-5.262-5.762-10.351-8.833-15.043c-3.26-4.589-6.055-9.16-9.385-13.128
			c-6.297-8.143-12.697-14.991-18.666-20.702c-5.9-5.762-11.61-10.178-16.234-13.767c-4.623-3.606-8.643-6.003-11.265-7.694
			c-2.674-1.622-4.158-2.415-4.158-2.415s3.053,5.848,8.367,16.078c2.243,4.399,4.761,9.678,7.47,15.578
			c-6.297-3.416-12.973-6.366-20.046-8.764l-47.252-16.044c-76.579-26.015-157.729,24.911-167.632,105.182l-1.484,12.042
			c-7.642,61.95,30.673,120.328,90.553,137.959l43.232,12.732c17.493,5.158,35.383,6.349,52.634,4.089
			c-7.332,4.796-14.577,8.677-21.116,12.179c-6.814,3.433-12.939,6.538-18.131,8.746c-10.316,4.554-16.648,7.021-16.648,7.021
			s1.639,0.397,4.761,0.845c3.105,0.38,7.729,1.173,13.611,1.259c5.9,0.242,13.128,0.259,21.409-0.535
			c8.246-0.897,17.648-2.312,27.706-5.193c5.089-1.259,10.161-3.295,15.578-5.158c5.227-2.294,10.765-4.485,16.13-7.539
			c11.006-5.676,21.616-13.387,31.967-22.944c2.588-2.605,5.244-5.244,7.798-8.022l1.932-2.07l1.466-1.811l2.915-3.623l2.933-3.64
			l1.466-1.829l2.139-3.105c2.036-3.002,3.933-6.124,5.779-9.281c7.401-12.68,12.835-26.74,16.372-41.093
			c1.656-7.211,2.881-14.508,3.657-21.685c0.811-6.745,0.69-14.439,0.983-21.513c-0.518-14.388-2.26-28.482-6.055-41.421
			C453.937,635.131,448.589,623.331,443.241,612.566z'
          />
          <path
            d='M900.368,651.847c-9.885-80.271-91.036-131.197-167.632-105.182l-47.252,16.044c-7.056,2.398-13.749,5.348-20.046,8.764
			c2.726-5.9,5.244-11.179,7.47-15.578c5.331-10.23,8.367-16.078,8.367-16.078s-1.501,0.794-4.175,2.415
			c-2.622,1.708-6.642,4.106-11.265,7.694c-4.623,3.588-10.334,8.005-16.234,13.767c-5.969,5.693-12.369,12.542-18.666,20.702
			c-3.33,3.968-6.141,8.539-9.385,13.128c-3.071,4.692-5.9,9.782-8.833,15.043c-5.348,10.765-10.696,22.565-13.974,35.659
			c-3.795,12.939-5.538,27.05-6.055,41.421c0.311,7.073,0.172,14.767,0.983,21.513c0.776,7.177,2.001,14.457,3.657,21.685
			c3.554,14.37,8.988,28.43,16.372,41.093c1.846,3.157,3.744,6.279,5.779,9.281l2.139,3.105l1.466,1.829l2.933,3.64l2.915,3.623
			l1.466,1.811l1.932,2.07c2.536,2.777,5.21,5.4,7.798,8.022c10.368,9.557,20.96,17.269,31.967,22.944
			c5.365,3.053,10.903,5.262,16.13,7.539c5.417,1.863,10.489,3.899,15.578,5.158c10.058,2.881,19.442,4.296,27.706,5.193
			c8.281,0.794,15.509,0.776,21.409,0.535c5.883-0.086,10.506-0.88,13.611-1.259c3.105-0.449,4.761-0.845,4.761-0.845
			s-6.314-2.467-16.682-7.021c-5.193-2.225-11.3-5.313-18.131-8.746c-6.538-3.502-13.784-7.384-21.116-12.18
			c17.251,2.277,35.158,1.07,52.634-4.089l43.232-12.732c59.88-17.631,98.195-76.01,90.553-137.959L900.368,651.847z'
          />
          <path
            d='M540.832,944.569h31.432c5.486,0,8.902-7.539,6.159-13.56l-31.432-69.161c-3.64-8.005-13.284-4.727-13.284,4.52v69.161
			C533.707,940.515,536.898,944.569,540.832,944.569z'
          />
          <path
            d='M483.747,937.34h31.432c3.933,0,7.108-3.192,7.108-7.108v-54.428c0-7.28-9.644-9.868-13.284-3.554l-31.432,54.428
			C474.845,931.423,478.278,937.34,483.747,937.34z'
          />
        </g>
      </g>
    </svg>
  );
};
