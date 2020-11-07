import styled from 'styled-components';

export const Container = styled.div`
    /* padding-left: 15px;
    padding-right: 15px; */
    align-items: stretch;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    flex-direction: row;
    display: flex;
`;

export const AvatarColumn = styled.div`
    /* flex-grow: 0; */
    flex-basis: 49px;
    margin-right: 10px;
    align-items: center;

    > div {
        flex-shrink: 1;
        /* width: 100%; */
    }
`;

export const Content = styled.div`
    flex-basis: 0px;
    padding-bottom: 10px;
`;

export const ContentColumn = styled.div`
    padding: 10px;
`;

export const ContentHeader = styled.div`
    margin-bottom: 2px;
`;

export const PostContent = styled.div``;

export const StatusBar = styled.div``;

export const Likes = styled.div``;
