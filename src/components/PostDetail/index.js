import React from 'react';
import { withRouter } from 'react-router-dom';

import Dayjs from 'dayjs';

import Avatar from './../Avatar';

import {
    Container,
    Wrapper,
    BoxUser,
    BoxTime,
    ContentColumn,
    ContentHeader,
    PostContent,
    Likes,
    StatusBar,
    LikeIcon,
} from './styles';
import { userAt } from '../../helpers';

const PostDetail = (props) => {
    const {
        location: {
            state: {
                post: {
                    post,
                    user: { name },
                    posted_at,
                    likes,
                },
            },
        },
    } = props;
    const date = Dayjs(posted_at).format('hh:mm A - MMM D, - YYYY');
    const at = userAt(name);

    return (
        <Container>
            <Wrapper>
                <ContentColumn>
                    <ContentHeader>
                        <Avatar size={50} />
                        <BoxUser>
                            <strong>{name}</strong>
                            <span>{at}</span>
                        </BoxUser>
                    </ContentHeader>
                    <PostContent>
                        <span>{post}</span>
                    </PostContent>
                    <BoxTime>
                        <time dateTime={posted_at}>{date}</time>
                    </BoxTime>
                    <StatusBar>
                        <Likes>
                            <LikeIcon />
                            <span>{likes}</span>
                        </Likes>
                    </StatusBar>
                </ContentColumn>
            </Wrapper>
        </Container>
    );
};

export default withRouter(PostDetail);
