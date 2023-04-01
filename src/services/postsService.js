import { timeoutPromise, DEFAULT_TIMEOUT } from './../helpers';

const POSTS_PATH = process.env.REACT_APP_POSTS_PATH;
const INITIAL_PAGE = 0;
const LIMIT = 5;

const mockFilterUserFriends = (user) => {
    return (unfilteredPosts) =>
        user
            ? unfilteredPosts.filter((item) =>
                  user.friends.includes(item?.user?.id)
              )
            : unfilteredPosts;
};

const mockSortPosts = (posts) => {
    return posts.sort((post1, post2) => {
        const date1 = new Date(post1.posted_at);
        const date2 = new Date(post2.posted_at);
        if (date1 > date2) return -1;
        if (date1 < date2) return 1;
        if (post1.likes > post2.likes) return -1;
        if (post1.likes < post2.likes) return 1;
        return 0;
    });
};

const mockPaginateResponse = (page, limit) => {
    return (posts) => {
        const start = page * limit;
        const end = start + limit;
        return posts.slice(start, end);
    };
};

const mockPaginableAPI = (page, limit, user) => {
    return timeoutPromise(DEFAULT_TIMEOUT, fetch(POSTS_PATH))
        .then((data) => data.json())
        .then(mockFilterUserFriends(user))
        .then(mockSortPosts)
        .then((postList) => {
            return postList
                .filter((item) => !item.post_sequence_id)
                .map((item) => {
                    const sequeces = postList.filter(
                        (post) => post.post_sequence_id === item.id
                    );
                    console.log('sequeces', sequeces);
                    item.sequeces = sequeces;
                    return item;
                });
        })
        .then(mockPaginateResponse(page, limit));
};

export const getFriendsPosts = (user, page = INITIAL_PAGE, limit = LIMIT) => {
    return mockPaginableAPI(page, limit, user);
};
