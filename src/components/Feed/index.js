import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

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

    const fetchData = () => {
        console.log('> fetchData');
    };

    const refresh = () => {
        console.log('> refresh');
    };

    return (
        // <div>
        //     <Padding />
        <Container>
            <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>
                        &#8595; Pull down to refresh
                    </h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>
                        &#8593; Release to refresh
                    </h3>
                }
            >
                {posts.map((_, index) => (
                    <div key={index}>div - #{index}</div>
                ))}
            </InfiniteScroll>
        </Container>
        // </div>
    );
};

export default Feed;
