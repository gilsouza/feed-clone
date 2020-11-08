import styled, { css } from 'styled-components';
import { Favorite } from '../../styles/Icons';

export const Container = styled.section`
    flex-direction: column;
    height: 100%;
`;

export const Wrapper = styled.article`
    flex-direction: row;
    display: flex;
    height: 100%;
`;

export const Content = styled.div`
    flex-basis: 0px;
    padding-bottom: 10px;
`;

export const ContentColumn = styled.div`
    padding: 10px 15px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContentHeader = styled.div`
    padding-bottom: 20px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
`;

export const BoxUser = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    justify-content: center;

    > strong {
        font-size: 15px;
        margin-bottom: 2px;
    }

    > span {
        color: var(--gray);
        font-weight: 500;
        font-size: 15px;
    }
`;

export const BoxTime = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > time {
        color: var(--gray);
    }
`;

export const PostContent = styled.div`
    font-weight: 400;
    font-size: 23px;

    > span {
        overflow-wrap: break-word;
    }
`;

export const StatusBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
