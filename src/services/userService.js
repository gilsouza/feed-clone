import { timeoutPromise, DEFAULT_TIMEOUT } from './../helpers';

const USE_INFO_PATH = process.env.REACT_APP_USER_INFO_PATH;

export const getUserInfo = () => {
    return timeoutPromise(DEFAULT_TIMEOUT, fetch(USE_INFO_PATH)).then((data) =>
        data.json()
    );
};
