import React from 'react';

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

const Post = ({ post: { post, user, posted_at, likes } }) => {
    const { name } = user;
    const elapsedTime = '1h';

    return (
        <Container>
            <Wrapper>
                <AvatarColumn>
                    <Avatar size={30} />
                </AvatarColumn>
                <ContentColumn>
                    <ContentHeader>
                        <strong>Gim Souza</strong>
                        <span>@gimsouza</span>
                        {/* <Dot /> */}
                        <time>27 de jun</time>
                    </ContentHeader>
                    <PostContent>
                        <span>{post}</span>
                        <StatusBar>
                            <Likes>
                                <span>{likes}</span>
                            </Likes>
                        </StatusBar>
                    </PostContent>
                </ContentColumn>
            </Wrapper>
        </Container>
    );
};

export default Post;
