import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    overflow: hidden;
    /* width: 100%; */
    width: min(600px, 100%);

    > div {
        width: min(600px, 100%);
    }
`;

// export const AvatarColumn = styled.div`
//     flex-basis: 49px;
// `;

// export const Content = styled.div`
//     flex-basis: 0px;
//     padding-bottom: 10px;
// `;
