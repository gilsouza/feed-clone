import styled from 'styled-components';

export const AvatarIcon = styled.div`
    background: var(--gray);
    border-radius: 50%;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
`;
