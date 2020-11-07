const POSTS_PATH = process.env.REACT_APP_POSTS_PATH;
const INITIAL_PAGE = 0;
const LIMIT = 5;

const mockFilterUserFriends = (user) => {
    return (unfilteredPosts) =>
        user
            ? unfilteredPosts.filter((item) =>
                  user?.friends.includes(item?.user?.id)
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
    return fetch(POSTS_PATH)
        .then((data) => data.json())
        .then(mockFilterUserFriends(user))
        .then(mockSortPosts)
        .then(mockPaginateResponse(page, limit));
};

export const listPosts = (page = INITIAL_PAGE, limit = LIMIT) => {
    return mockPaginableAPI(page, limit);
};

export const listFriendsPosts = (user, page = INITIAL_PAGE, limit = LIMIT) => {
    return mockPaginableAPI(page, limit, user);
};
