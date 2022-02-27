import { Container } from '@components/styled/LayoutStyles';
import { Heading1, Subtitle } from '@components/styled/typography';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const IntroSection = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <Container>
      <Heading1>
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate='visible'
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1 + 0.5,
                    },
                  }),
                }}
              >
                Gabriel Lellouche
              </SplitText>
            </motion.div>
          )}
        </AnimatePresence>
      </Heading1>
      <Subtitle>Let&apos;s be unboring</Subtitle>
    </Container>
  );
};

export default IntroSection;

export function SplitText({ children, ...rest }) {
  let words = children.split(' ');
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
      </div>
    );
  });
}
