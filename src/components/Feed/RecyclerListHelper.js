import { LayoutProvider, DataProvider } from 'recyclerlistview/web';

import { ContextProvider } from 'recyclerlistview';

const getWindowWidth = () => {
    // To deal with precision issues on android.
    return Math.round(window.innerWidth * 1000) / 1000;
};

const getLayoutProvider = () => {
    const currentWidth = getWindowWidth();

    return new LayoutProvider(
        () => 'FIXED',
        (type, dim) => {
            switch (type) {
                case 'FIXED':
                    dim.width = currentWidth;
                    dim.height = 120;
                    break;
                default:
                    dim.width = 0;
                    dim.height = 0;
            }
        }
    );
};

const getDataProvider = (data) =>
    new DataProvider((r1, r2) => {
        return r1 !== r2;
    }).cloneWithRows(data);

export { getLayoutProvider, getDataProvider };
