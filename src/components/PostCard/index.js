import React from 'react';
import Dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';

import Avatar from './../Avatar';

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

// {
//     post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     user: {
//         id: 2,
//         name: 'User 2',
//     },
//     posted_at: '2020-10-01T19:20:55',
//     likes: 10,
// }

Dayjs.locale(locale);

const Post = ({
    post: {
        post,
        user: { name },
        posted_at,
        likes,
    },
}) => {
    const date = Dayjs(posted_at).format('MMM D, YYYY');
    const at = `@${name.toLowerCase().replace(' ', '_')}`;
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
                        {/* <Dot /> */}
                        <time dateTime={posted_at}>{date}</time>
                    </ContentHeader>
                    <PostContent>
                        <span>{post}</span>
                        <StatusBar>
                            <Likes>
                                <LikeIcon />
                                {likes}
                            </Likes>
                        </StatusBar>
                    </PostContent>
                </ContentColumn>
            </Wrapper>
        </Container>
    );
};

export default Post;
