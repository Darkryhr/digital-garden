import { motion } from 'framer-motion';

export const Logo = ({ theme }) => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      width='100%'
      height='100%'
      fill={theme === 'dark' || !theme ? '#f4f4f4' : '#000000'}
      viewBox='0 0 768.22 147.02'
      whileHover={{
        fill: '#FF7F11',
      }}
    >
      <path d='M63.27 99.53h3.13c.38 0 .7-.32.7-.7V93.4c0-.73-.96-.99-1.32-.36l-3.13 5.42a.71.71 0 0 0 .62 1.06zM52.76 113.64l-.02-.03a17.27 17.27 0 0 1-3.06-4.27 17.04 17.04 0 0 1-3.06 4.27h-.02l-.49.49a4.82 4.82 0 1 0 6.65-.46zM70.75 113.64l-.03-.03a17.27 17.27 0 0 1-3.06-4.27 17.04 17.04 0 0 1-3.06 4.27h-.02l-.49.49a4.82 4.82 0 1 0 7.13 0l-.47-.46zM60.05 69.48c-.26-.47-.51-.92-.79-1.35-.3-.4-.55-.83-.84-1.18a17.96 17.96 0 0 0-3.15-3.1c-.4-.32-.77-.54-1-.69-.24-.15-.39-.21-.39-.21l.76 1.44.68 1.4c-.57-.3-1.18-.57-1.8-.79l-4.26-1.44a11.47 11.47 0 0 0-15.07 9.46l-.13 1.07A11.48 11.48 0 0 0 42.2 86.5l3.9 1.15c1.57.46 3.17.57 4.72.36-.66.44-1.3.78-1.9 1.1-.6.3-1.16.59-1.63.79l-1.5.63.44.08c.27.03.69.1 1.21.1a13.24 13.24 0 0 0 4.42-.51c.46-.1.92-.3 1.4-.46.47-.2.97-.4 1.45-.68.99-.51 1.94-1.2 2.87-2.06l.7-.72.18-.19.13-.17.27-.32.26-.32.14-.17.18-.28c.19-.27.36-.55.53-.83a13.66 13.66 0 0 0 1.79-5.65c.08-.6.06-1.3.09-1.93a15.82 15.82 0 0 0-1.8-6.94zM88.39 113.64l-.04-.03a17.27 17.27 0 0 1-3.06-4.27 17.04 17.04 0 0 1-3.05 4.27h-.02a4.77 4.77 0 0 0-1.75 3.72 4.82 4.82 0 1 0 8.4-3.23c-.17-.15-.33-.3-.48-.46z' />
      <path d='M114.8 0H22.54A22.53 22.53 0 0 0 0 22.53V124.5a22.53 22.53 0 0 0 22.53 22.52h92.28a22.53 22.53 0 0 0 22.52-22.52V22.53A22.53 22.53 0 0 0 114.81 0zM93.96 101.1v16.66a8.76 8.76 0 1 1-17.53 0 8.75 8.75 0 1 1-17.51 0 8.76 8.76 0 1 1-17.52 0V101.1a44.52 44.52 0 0 1-16.66-47.92 44.73 44.73 0 0 1 11.99-20.09l2.93 2.9-4.52 4.93-1.2 1.33.85.98 1.17 1.32 7.01 7.95-4.52-9.54 5.2-3.04 5.43 5.37 1.5 1.47 1.32-1.33 7.1-7.19 7.39 20.89L60.8 35.4l-.46-2-1.7 1.39-7.8 6.34-5.91-7.25-3.74-4.6a44.16 44.16 0 0 1 25.84-8.79h.64a44.58 44.58 0 0 1 26.28 80.6z' />
      <path d='M101.15 73.02a11.47 11.47 0 0 0-15.08-9.46L81.83 65c-.64.21-1.24.48-1.8.8.24-.54.47-1.01.67-1.41l.75-1.44s-.13.06-.37.21-.6.37-1.01.7a16.12 16.12 0 0 0-3.14 3.1c-.3.34-.55.76-.85 1.17a15.74 15.74 0 0 0-2.6 8.28c.04.64.03 1.33.1 1.94a14.05 14.05 0 0 0 2.32 6.48l.2.27.13.17.25.33.27.32.13.17.17.18.7.72c.94.86 1.89 1.55 2.88 2.07.48.27.98.47 1.45.67.48.17.94.36 1.4.46a13.24 13.24 0 0 0 4.42.52c.52 0 .94-.07 1.22-.1l.43-.09s-.57-.22-1.5-.63c-.47-.2-1.02-.48-1.63-.78-.59-.32-1.25-.67-1.9-1.1 1.55.2 3.16.1 4.73-.37l3.89-1.14a11.47 11.47 0 0 0 8.14-12.41l-.13-1.07zM69.56 92.02c-.36-.8-1.32-.47-1.32.45v6.88c0 .5.31.9.7.9h3.14c.54 0 .88-.75.6-1.35l-3.12-6.88z' />
      <g>
        <path d='M219.5 87.5h7.96v14.47h-30V49.05h53.7V25.36h-66.47a11 11 0 0 0-7.83 3.23 11 11 0 0 0-3.24 7.83v78.17c0 6.1 4.96 11.07 11.07 11.07h55.4c6.1 0 11.07-4.97 11.07-11.07V87.5h8.02l.07-23.69H219.5v23.7zM342.3 25.36h-54.94c-6.1 0-11.07 4.96-11.07 11.07v89.23H300V93.91h30v31.75h23.7l-.32-89.27a11.08 11.08 0 0 0-11.06-11.03zM330 49.06v21.16h-30V49.05h30zM441.27 63.64l-.1-26.69a11.66 11.66 0 0 0-11.64-11.6h-44.06a11 11 0 0 0-7.83 3.24 11 11 0 0 0-3.24 7.83v78.16c0 6.1 4.97 11.07 11.07 11.07h42.63v.02h12.62c6.1 0 11.07-4.96 11.07-11.07V75.22c0-6.04-4.63-11.02-10.52-11.58zM428.1 87.48v14.48h-30V87.49h30zm-30-23.69V49.04h19.48V63.8H398.1zM538.93 70.14V37c0-3.1-1.2-6.03-3.4-8.23s-5.13-3.4-8.24-3.4h-44.16c-6.1 0-11.06 4.96-11.06 11.07v89.22h23.69V93.78h30v31.89h23.7V81.73c0-6.04-4.63-11.02-10.53-11.59zm-23.69-21.1V70.1h-19.48V49.04h19.48zM570.04 25.36h23.69v100.3h-23.69zM625.33 25.36a11 11 0 0 0-7.83 3.24 11 11 0 0 0-3.24 7.83l.05 78.17c0 6.1 4.97 11.06 11.06 11.06h55.54v-23.7H638V85.95h37.71V65.36h-37.71v-16.3h42.9v-23.7h-55.58zM725.32 101.97V25.36h-23.7v89.23c0 6.1 4.97 11.07 11.07 11.07h55.53v-23.7h-42.9z' />
      </g>
    </motion.svg>
  );
};

export const LogoIcon = ({ theme }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      width='20%'
      height='20%'
      fill={theme === 'dark' || !theme ? '#f4f4f4' : '#000000'}
      viewBox='0 0 92.89 110.48'
    >
      <path d='M92.28 38.87A46.45 46.45 0 0 0 46.45 0l-.67.01a46.02 46.02 0 0 0-26.92 9.15l3.9 4.8 6.15 7.56 8.13-6.62 1.77-1.43.48 2.07 5.82 24.7-7.7-21.76-7.4 7.5-1.38 1.38-1.56-1.53-5.65-5.6-5.43 3.17 4.72 9.95-7.31-8.29-1.22-1.38-.9-1.02 1.27-1.38 4.7-5.15-3.05-3.01A46.6 46.6 0 0 0 1.7 34.05a46.39 46.39 0 0 0 17.36 49.92v17.38a9.13 9.13 0 1 0 18.26 0 9.12 9.12 0 1 0 18.25 0 9.12 9.12 0 1 0 18.26 0V83.98a46.34 46.34 0 0 0 18.45-45.11zm-64.59 67.05a5.02 5.02 0 0 1-3.7-8.4l.5-.5h.03c1.27-1.3 2.35-2.8 3.18-4.45a18 18 0 0 0 3.19 4.46l.03.02.5.48a5.02 5.02 0 0 1-3.72 8.4zm12.6-45.64a14.28 14.28 0 0 1-2.42 6.75l-.19.29-.14.18-.28.34-.28.33-.13.18-.18.2-.73.74c-.97.89-1.96 1.61-3 2.15-.5.29-1.02.49-1.5.7-.51.18-.98.37-1.46.48a13.82 13.82 0 0 1-4.6.54c-.55 0-.99-.07-1.28-.11l-.44-.08s.58-.23 1.56-.66c.49-.2 1.06-.5 1.7-.81.61-.34 1.29-.7 1.97-1.15-1.6.21-3.28.1-4.92-.38l-4.06-1.2a11.96 11.96 0 0 1-8.48-12.92l.14-1.12a11.95 11.95 0 0 1 15.7-9.86l4.43 1.5c.65.23 1.28.5 1.88.83a46.48 46.48 0 0 0-1.5-2.96s.15.06.4.22a16.93 16.93 0 0 1 4.32 3.94c.31.37.58.8.89 1.23a16.43 16.43 0 0 1 2.7 8.63c-.04.67-.02 1.4-.1 2.02zm.93 20.97 3.26-5.65c.38-.66 1.38-.39 1.38.37v5.65c0 .4-.33.73-.73.73h-3.26a.74.74 0 0 1-.65-1.1zm5.21 24.67a5.02 5.02 0 0 1-3.2-8.9h.02c1.28-1.3 2.36-2.8 3.19-4.45a18 18 0 0 0 3.19 4.46l.03.02.49.48a5.02 5.02 0 0 1-3.72 8.4zm4.61-22.82h-3.26c-.41 0-.74-.42-.74-.94v-7.17c0-.96 1-1.3 1.38-.47l3.26 7.17c.28.62-.08 1.41-.64 1.41zm13.76 22.82a5.02 5.02 0 0 1-3.2-8.9h.03c1.27-1.3 2.35-2.8 3.18-4.45A18 18 0 0 0 68 97.03l.04.02.49.48a5 5 0 0 1-3.73 8.4zM73 68.77l-4.05 1.2c-1.64.48-3.32.59-4.94.38.69.45 1.37.81 1.99 1.14.64.32 1.2.62 1.69.82.97.43 1.56.66 1.56.66l-.44.08c-.3.04-.73.1-1.28.11a13.81 13.81 0 0 1-4.6-.54c-.47-.1-.95-.3-1.45-.48-.5-.21-1.01-.41-1.51-.7a14.05 14.05 0 0 1-3-2.15c-.24-.25-.5-.49-.73-.75l-.18-.2-.14-.17-.28-.33-.27-.35-.13-.17-.2-.29a14.63 14.63 0 0 1-2.42-6.75c-.08-.63-.07-1.35-.1-2.02a16.46 16.46 0 0 1 2.7-8.63c.31-.42.57-.86.89-1.23a16.72 16.72 0 0 1 3.26-3.22c.44-.34.81-.57 1.06-.72l.39-.23-.79 1.5-.7 1.47c.6-.33 1.22-.6 1.88-.83l4.42-1.5a11.95 11.95 0 0 1 15.7 9.86l.15 1.12a11.95 11.95 0 0 1-8.48 12.92z' />
    </svg>
  );
};
