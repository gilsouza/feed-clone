import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }

    display: flex;
    flex-direction: column;
    align-self: center;
    width: min(600px, 100%);
`;

export const Header = styled.div`
    padding: 0 15px;
    min-height: 53px;
    top: 0;
    position: sticky;
    border-bottom: 1px solid var(--outline);
    background: var(--primary);

    display: flex;
    align-items: center;
    text-align: left;
    z-index: 2;
`;

export const Body = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 19px;
`;

export const Avatar = styled.div`
    background: var(--gray);
    border-radius: 50%;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
`;
