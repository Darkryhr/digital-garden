import { useState, useRef } from 'react';
import { FiCopy } from 'react-icons/fi';
import { CopyButton } from './mdx.css';

export const Pre = props => {
  const textInput = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const onEnter = () => {
    setHovered(true);
  };

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textInput}
      style={{
        position: 'relative',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
    >
      {hovered && (
        <CopyButton onClick={onCopy} $copied={copied}>
          <FiCopy size={14} />
        </CopyButton>
      )}
      <pre>{props.children}</pre>
    </div>
  );
};
