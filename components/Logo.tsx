export const Logo = ({ theme }) => {
  return (
    // <svg
    //   xmlns='http://www.w3.org/2000/svg'
    //   width='100%'
    //   height='100%'
    //   fill={theme === 'dark' || !theme ? '#f4f4f4' : '#000000'}
    //   viewBox='0 0 4134.483 1403.448'
    // >
    //   <path d='M887.5 975.72H0V0h887.5v233.55H233.55v508.62h420.39v-129.1H358.11V379.52H887.5zM2921.99 975.72h-887.5V0h762.94v434.3l124.56 23.85v517.57zm-653.94-233.55h420.39v-90.96l-420.4-80.54v171.5zm0-409.3 295.82 56.67V233.55h-295.82v99.32zM1017.25 0v975.72h233.55V780.1l420.39-136v331.63h233.55V0h-887.5zm233.55 534.63V233.55h420.39v165.08l-420.39 136z' />
    // </svg>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      fill={theme === 'dark' || !theme ? '#f4f4f4' : '#000000'}
      viewBox='0 0 398.533 111.541'
    >
      <path d='M209.26 100.04h-76.9V15.5h76.9v20.23H152.6V79.8h36.42V68.62h-25.63V48.38h45.87zM385.53 100.04h-76.9V15.5h66.11v37.63l10.8 2.07v44.84zM328.87 79.8h36.43v-7.88l-36.43-6.97V79.8zm0-35.46 25.63 4.91V35.73h-25.63v8.61zM220.5 15.5v84.54h20.23V83.09l36.43-11.78v28.73h20.23V15.5h-76.9zm20.24 46.32V35.73h36.42v14.3l-36.43 11.8zM92.28 39.4A46.45 46.45 0 0 0 46.45.53l-.67.01A46.02 46.02 0 0 0 18.86 9.7l3.9 4.8 6.15 7.55 8.13-6.62L38.8 14l.48 2.07 5.82 24.7-7.7-21.76-7.4 7.5-1.38 1.38-1.56-1.53-5.65-5.6-5.43 3.17 4.72 9.95-7.31-8.29-1.22-1.38-.9-1.02 1.27-1.38 4.7-5.15-3.05-3A46.6 46.6 0 0 0 1.7 34.57 46.39 46.39 0 0 0 19.06 84.5v17.38a9.13 9.13 0 1 0 18.26 0 9.12 9.12 0 1 0 18.25 0 9.12 9.12 0 1 0 18.26 0V84.5a46.34 46.34 0 0 0 18.45-45.1zm-64.59 67.05a5.02 5.02 0 0 1-3.7-8.4l.5-.5h.03c1.27-1.3 2.35-2.8 3.18-4.45a18 18 0 0 0 3.19 4.46l.03.02.5.48a5.02 5.02 0 0 1-3.72 8.4zm12.6-45.64a14.28 14.28 0 0 1-2.42 6.75l-.19.29-.14.18-.28.34-.28.33-.13.18-.18.2-.73.74c-.97.9-1.96 1.61-3 2.15-.5.29-1.02.5-1.5.7-.51.18-.98.37-1.46.49a13.82 13.82 0 0 1-4.6.54c-.55-.02-.99-.08-1.28-.12-.3-.04-.44-.08-.44-.08s.58-.23 1.56-.66c.49-.2 1.06-.5 1.7-.81.61-.34 1.29-.7 1.97-1.15-1.6.21-3.28.1-4.92-.38l-4.06-1.2a11.96 11.96 0 0 1-8.48-12.92l.14-1.12a11.95 11.95 0 0 1 15.7-9.85l4.43 1.5c.65.22 1.28.5 1.88.82a46.48 46.48 0 0 0-1.5-2.96s.15.06.4.22.63.38 1.05.72a16.93 16.93 0 0 1 3.28 3.22c.3.37.57.8.88 1.23a16.43 16.43 0 0 1 2.7 8.63c-.04.67-.02 1.4-.1 2.02zm.93 20.97 3.26-5.65c.38-.65 1.38-.39 1.38.37v5.65c0 .4-.33.74-.73.74h-3.26a.74.74 0 0 1-.65-1.11zm5.21 24.67a5.02 5.02 0 0 1-3.2-8.9h.02c1.28-1.3 2.36-2.8 3.19-4.45a18 18 0 0 0 3.19 4.46l.03.02.49.48a5.02 5.02 0 0 1-3.72 8.4zm4.61-22.82h-3.26c-.41 0-.74-.42-.74-.94v-7.16c0-.97 1-1.3 1.38-.48l3.26 7.17c.28.63-.08 1.41-.64 1.41zm13.76 22.82a5.02 5.02 0 0 1-3.2-8.9h.03c1.27-1.3 2.35-2.8 3.18-4.45A18 18 0 0 0 68 97.56l.04.02.49.48a5 5 0 0 1-3.73 8.4zM73 69.3l-4.05 1.2c-1.64.48-3.32.6-4.94.38.69.45 1.37.81 1.99 1.15.64.31 1.2.6 1.69.81.97.43 1.56.66 1.56.66l-.44.08c-.3.04-.73.1-1.28.11a13.81 13.81 0 0 1-4.6-.54c-.47-.1-.95-.3-1.45-.48a14.05 14.05 0 0 1-4.5-2.85c-.25-.25-.5-.49-.74-.75l-.18-.2-.14-.17-.28-.33-.27-.34-.13-.18-.2-.29a14.63 14.63 0 0 1-2.42-6.75c-.08-.63-.07-1.35-.1-2.02a16.46 16.46 0 0 1 2.7-8.63c.31-.42.57-.86.89-1.23a16.72 16.72 0 0 1 3.26-3.22c.44-.34.81-.57 1.06-.72.25-.16.39-.22.39-.22l-.79 1.5-.7 1.46c.6-.33 1.22-.6 1.88-.83l4.42-1.5a11.95 11.95 0 0 1 15.7 9.86l.15 1.12a11.95 11.95 0 0 1-8.48 12.92z' />
    </svg>
  );
};
