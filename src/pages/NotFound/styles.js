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

export const Body = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const NotFoundText = styled.div`
    margin-top: 40px;
    align-self: center;
    justify-self: center;
    font-weight: 700;
    font-size: 20px;
`;
