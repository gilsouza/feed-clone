import React from 'react';

import { Container, Padding } from './styles';

const Feed = () => {
    const posts = [
        {
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            user: {
                id: 2,
                name: 'User 2',
            },
            posted_at: '2020-10-01T19:20:55',
            likes: 10,
        },
        {
            post: 'Mauris ac augue ipsum.',
            user: {
                id: 3,
                name: 'User 3',
            },
            posted_at: '2020-10-01T19:20:55',
            likes: 5,
        },
    ];
    return (
        <>
            <Padding />
            <Container></Container>
        </>
    );
};

export default Feed;
