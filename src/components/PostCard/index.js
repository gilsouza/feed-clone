import React from 'react';
import Dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';

import Avatar from './../Avatar';
import { userAt } from '../../helpers';

import {
    Container,
    Wrapper,
    AvatarColumn,
    ContentColumn,
    ContentHeader,
    PostContent,
    Likes,
    StatusBar,
    LikeIcon,
} from './styles';

Dayjs.locale(locale);

const Post = (props) => {
    const {
        post: {
            post,
            user: { name },
            posted_at,
            likes,
        },
    } = props;
    const date = Dayjs(posted_at).format('MMM D, YYYY');
    const at = userAt(name);
    return (
        <Container>
            <Wrapper>
                <AvatarColumn>
                    <Avatar size={40} />
                </AvatarColumn>
                <ContentColumn>
                    <ContentHeader>
                        <strong>{name}</strong>
                        <span>{at}</span>
                        <time dateTime={posted_at}>{date}</time>
                    </ContentHeader>
                    <PostContent>
                        <span>{post}</span>
                    </PostContent>
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

export default Post;
