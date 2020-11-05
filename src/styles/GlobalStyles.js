import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--white);
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
    }
    html {
        background: var(--primary);
    }
    :root {
        --primary: #15202b;
        --secondary: #253341;
        --gray: #8899a6;
        --white: #FFF;
        --outline: #2F3336;
        
        --twitter: #1da1f2;
        --twitter-dark-hover: #1a91da
        --twitter-light-hover: #1da1f2

        --like:#e0245e;
    }
`;

export const Container = styled.div`
    background: var(--primary);
`;

export const Wrapper = styled.div`
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
`;
