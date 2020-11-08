import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    overflow: hidden;
    width: min(600px, 100%);

    > div {
        width: min(600px, 100%);
    }
`;

export const ErrorText = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    flex-direction: column;
    align-items: center;

    > span {
        margin-top: 10px;
    }
`;
