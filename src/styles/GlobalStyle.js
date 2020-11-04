import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    * {
        color: var(--white);
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }
    *, button, input {
        background: none;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    html {
        background: var(--primary);
    }
    :root {
        --primary: #15202b;
        --secondary: #253341;
        --gray: #8899a6;
        --white: #FFF;
        
        --blue: #1da1f2;
        --dark-hover: #1a91da
        --light-hover: #1da1f2

        --like:#e0245e;
    }
`;
