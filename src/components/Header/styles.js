import styled, { css } from 'styled-components';
import { ArrowLeft } from './../../styles/Icons';

export const Container = styled.header`
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

export const Title = styled.h2`
    font-size: 19px;
`;

export const Avatar = styled.div`
    background: var(--gray);
    border-radius: 50%;
    margin-right: 15px;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
`;

const iconCSS = css`
    width: 20px;
    height: 20px;
    margin-right: 35px;
    margin-left: 5px;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
    ${iconCSS}
    fill: var(--twitter)
`;
