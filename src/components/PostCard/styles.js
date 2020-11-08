import styled, { css } from 'styled-components';
import { Favorite } from '../../styles/Icons';

export const Container = styled.article`
    flex-direction: column;
    height: 100%;

    &:hover {
        background-color: var(--secondary);
    }
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
    padding: 15px 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`;

export const Likes = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const iconCSS = css`
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;

export const LikeIcon = styled(Favorite)`
    ${iconCSS}
    fill: var(--like);
`;
