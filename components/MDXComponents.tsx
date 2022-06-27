import styled from 'styled-components';
import Link from 'next/link';
import DateFormatter from '@components/DateFormatter';
import { breakpoint } from '@styled/breakpoints.css';
import { useState, useRef } from 'react';
import { FiCopy } from 'react-icons/fi';

const Heading2 = styled.h2`
  scroll-margin-top: 8rem;
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
  font-family: 'Poppins', sans-serif;

  &:hover a {
    visibility: visible;
  }
`;

const Heading1 = styled.h1`
  margin-bottom: 0.2em;
  font-size: 4rem;
  padding: 4rem 0 0 0;
  scroll-margin-top: 3rem;
  font-family: 'Poppins', sans-serif;
  @media (${breakpoint.device.sm}) {
    font-size: 2.5rem;
    padding: 3rem 1rem 0 1rem;
  }
`;

const CustomLink = props => {
  return (
    <Link href={props.href} passHref>
      <A {...props}>{props.children}</A>
    </Link>
  );
};

const A = styled.a`
  visibility: hidden;
  position: absolute;
  margin-left: -1.1em;
  padding-right: 1rem;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 0.2em;
  width: 80%;
  max-width: 700px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  &::after {
    font-weight: 500;
    opacity: 0.3;
    content: '#';
  }
`;

const Ul = styled.ul`
  list-style-type: disc;
  padding-left: 1.625em;

  li {
    padding-left: 0.375em;
    margin: 1em 0;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.25em;
  line-height: 1.65;
`;

const Article = styled.article`
  margin-top: 1rem;
  font-family: 'IBM Plex Sans', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  line-height: 1.75;
  @media (${breakpoint.device.sm}) {
    padding: 0 1rem;
  }

  pre {
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 1em;
  }

  .rehype-code-title {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 0.7rem;
    border-top-right-radius: 0.7rem;
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: none;
  }
  /**
 * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .code-highlight.
 */
  .code-highlight {
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .code-line {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: -16px;
    margin-right: -16px;
    border-left-width: 4px;
    border-left-color: rgba(31, 41, 55, 0); /* Set code block color */
  }

  .code-line.inserted {
    background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
  }

  .code-line.deleted {
    background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
  }

  .highlight-line {
    margin-left: -16px;
    margin-right: -16px;
    background-color: rgba(122, 122, 122, 0.164); /* Set highlight bg color */
    border-left-style: solid;
    border-left-width: 5px;
    border-left-color: rgb(
      59,
      130,
      246
    ); /* Set highlight accent border color */
  }

  .line-number::before {
    display: inline-block;
    width: 1rem;
    text-align: right;
    margin-right: 16px;
    margin-left: -8px;
    color: rgb(156, 163, 175); /* Line number color */
    content: attr(line);
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
      'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
      'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    padding: 1rem;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    color: #9a86fd;
  }

  pre > code[class*='language-'] {
    font-size: 0.9em;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #6a51e6;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #6a51e6;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6c6783;
  }

  .token.punctuation {
    color: #6c6783;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #e09142;
  }

  .token.property,
  .token.function {
    color: #9a86fd;
  }

  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: #eeebff;
  }

  code.language-javascript,
  .token.attr-name {
    color: #c4b9fe;
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.string,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #11b44d;
  }

  .token.placeholder,
  .token.variable {
    color: #11b44d;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #eeebff;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #c4b9fe;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #8a75f5;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers.line-numbers .line-numbers-rows {
    border-right-color: #2c2937;
  }

  .line-numbers .line-numbers-rows > span:before {
    color: #3c3949;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
  .line-highlight.line-highlight {
    background: rgba(224, 145, 66, 0.2);
    background: -webkit-linear-gradient(
      left,
      rgba(224, 145, 66, 0.2) 70%,
      rgba(224, 145, 66, 0)
    );
    background: linear-gradient(
      to right,
      rgba(224, 145, 66, 0.2) 70%,
      rgba(224, 145, 66, 0)
    );
  }
`;

const CopyButton = styled.button<{ $copied: boolean }>`
  position: absolute;
  top: 0.3em;
  right: 0.25em;
  padding: 0.5em;
  outline: none;
  transition: ease all 100ms;
  border: 1px solid
    ${props =>
      props.$copied ? props.theme.colors.accent : props.theme.colors.border};
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  svg {
    stroke: ${props =>
      props.$copied ? props.theme.colors.accent : props.theme.colors.text};
  }
`;

const Pre = props => {
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

const MDXComponents = {
  h1: props => <Heading1 {...props} />,
  h2: props => <Heading2 {...props} />,
  a: props => <CustomLink {...props} />,
  ul: props => <Ul {...props} />,
  p: props => <Paragraph {...props} />,
  pre: Pre,
  Article,
  DateFormatter,
};

export default MDXComponents;
