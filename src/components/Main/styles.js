import styled from 'styled-components';

export const Header = styled.div`
    padding: 0 15px;
    height: 53px;
    top: 0;
    position: sticky;
    border-bottom: 1px solid var(--outline);
    background: var(--primary);

    display: flex;
    align-items: center;
    text-align: left;
`;

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 19px;
`;
