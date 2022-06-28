import { MenuStyles, LinkWrapper } from './Header.css';
import { useRouter } from 'next/router';
import { BiSun, BiMoon } from 'react-icons/bi';
import { LinkContainer } from './LinkContainer';

export const Menu = ({ mobile, themeIcon, toggleTheme }) => {
  const router = useRouter();
  return (
    <MenuStyles $mobile={mobile}>
      <LinkContainer href='/' exact theme={themeIcon}>
        Home
      </LinkContainer>
      <LinkContainer href='/posts' theme={themeIcon}>
        Blog
      </LinkContainer>
      <LinkContainer href='/portfolio' theme={themeIcon}>
        Portfolio
      </LinkContainer>
      {/* <LinkContainer href='/snippets' theme={themeIcon}>
        Snippets
      </LinkContainer> */}
      <LinkWrapper
        onClick={() => toggleTheme()}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#8383834b',
        }}
        transition={{
          duration: 0.1,
        }}
        whileTap={{ scale: 0.9 }}
        $currentTheme={themeIcon}
        $active={false}
      >
        {themeIcon === 'light' ? <BiMoon size={20} /> : <BiSun size={20} />}
      </LinkWrapper>
    </MenuStyles>
  );
};

{
  /* <LinkWrapper
        whileHover={{
          scale: 1.05,
          backgroundColor: '#8383834b',
        }}
        transition={{
          duration: 0.1,
        }}
        whileTap={{ scale: 0.9 }}
        $currentTheme={themeIcon}
        $active={router.pathname === '/' ? true : false} 
      >
        <Link href='/'>Home</Link>
      </LinkWrapper>
      <LinkWrapper
        whileHover={{
          scale: 1.05,
          backgroundColor: '#8383834b',
        }}
        transition={{
          duration: 0.1,
        }}
        whileTap={{ scale: 0.9 }}
        $currentTheme={themeIcon}
        $active={router.pathname.includes('/posts') ? true : false}
      >
        <Link href='/posts'>Blog</Link>
      </LinkWrapper>
      <LinkWrapper
        whileHover={{
          scale: 1.05,
          backgroundColor: '#8383834b',
        }}
        transition={{
          duration: 0.1,
        }}
        whileTap={{ scale: 0.9 }}
        $currentTheme={themeIcon}
        $active={router.pathname == '/portfolio' ? true : false}
      >
        <Link href='/portfolio' passHref>
          Portfolio
        </Link>
      </LinkWrapper> */
}
