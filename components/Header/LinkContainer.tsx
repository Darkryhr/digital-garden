import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LinkWrapper } from './Header.css';
import { useRouter } from 'next/router';

export const LinkContainer = ({ href, children, exact = false, theme }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (exact) {
      setActive(router.pathname === href);
    } else {
      setActive(router.pathname.includes(href));
    }
  }, [router]);

  return (
    <LinkWrapper
      whileHover={{
        scale: 1.05,
        backgroundColor: '#8383834b',
      }}
      transition={{
        duration: 0.1,
      }}
      whileTap={{ scale: 0.9 }}
      $currentTheme={theme}
      $active={active}
    >
      <Link href={href}>{children}</Link>
    </LinkWrapper>
  );
};
