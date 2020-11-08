import styled, { css } from 'styled-components';
import { Favorite } from '../../styles/Icons';

export const Container = styled.div`
    flex-direction: column;
    height: 100%;
`;

export const Wrapper = styled.div`
    flex-direction: row;
    display: flex;
    height: 100%;
`;

export const AvatarColumn = styled.div`
    display: flex;
    min-width: 65px;
    justify-content: center;
    align-items: start;
    padding-top: 15px;
`;

export const Content = styled.div`
    flex-basis: 0px;
    padding-bottom: 10px;
`;

export const ContentColumn = styled.div`
    padding: 0 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContentHeader = styled.div`
    padding-bottom: 10px;
    font-weight: 400;

    > * {
        margin-right: 10px;
    }

    > span {
        color: var(--gray);
        font-weight: 700;
        font-size: 15px;
    }

    > time {
        color: var(--gray);
        font-size: 15px;
    }
`;

export const PostContent = styled.div`
    font-weight: 400;
    font-size: 15px;

    > span {
        overflow-wrap: anywhere;
    }
`;

export const StatusBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 11px auto 0;
    width: 100%;

    > div {
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Likes = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        color: var(--gray);
        > svg {
            fill: var(--like);
        }
    }
`;

const iconCSS = css`
    width: 25px;
    height: 25px;
`;

export const LikeIcon = styled(Favorite)`
    ${iconCSS}
`;
