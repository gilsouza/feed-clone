const POSTS_PATH = process.env.REACT_APP_POSTS_PATH;

export const listPosts = () => {
    return fetch(POSTS_PATH).then((data) => data.json());
};
