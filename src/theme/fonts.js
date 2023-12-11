import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        /* latin */
        @font-face {
            font-family: 'HvDTrial Brandon Grotesque Reg';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('../assets/fonts/Brandon_Grot_Reg.otf') format('opentype');
        }
      `}
  />
);

export default Fonts;
