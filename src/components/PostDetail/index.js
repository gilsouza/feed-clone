import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as ROUTES from './../../routers';

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

const DATE_FORMAT = 'hh:mm A - MMM D, - YYYY';

const PostDetail = () => {
    const history = useHistory();
    const { state: statePost } = useLocation();

    useEffect(() => {
        // fix viewport in android
        window.scrollTo(0, 0);
    }, []);

    if (!statePost) {
        history.push(ROUTES.HOME);
        return null;
    }

    const {
        post: {
            post,
            user: { name },
            posted_at,
            likes,
        },
    } = statePost;

    const date = Dayjs(posted_at).format(DATE_FORMAT);
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

export default PostDetail;
