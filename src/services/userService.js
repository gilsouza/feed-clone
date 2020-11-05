const USE_INFO_PATH = process.env.REACT_APP_USER_INFO_PATH;

export const getUserInfo = () => {
    return fetch(USE_INFO_PATH).then((data) => data.json());
};
