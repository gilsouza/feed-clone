import styled from 'styled-components';

export const AvatarIcon = styled.div`
    background: var(--gray);
    border-radius: 50%;
    margin-right: 15px;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
`;
