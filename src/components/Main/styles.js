import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }

    display: flex;
    flex-direction: column;
    width: min(600px, 100%);
`;
