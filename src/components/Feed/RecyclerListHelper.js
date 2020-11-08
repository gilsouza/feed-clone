import { LayoutProvider, DataProvider } from 'recyclerlistview/web';

import { ContextProvider } from 'recyclerlistview';

const getWindowWidth = () => {
    return Math.round(window.innerWidth * 1000) / 1000;
};

const getLayoutProvider = (parent) => {
    const currentWidth = getWindowWidth();

    return new LayoutProvider(
        () => 'FIX',
        (type, dim) => {
            switch (type) {
                case 'FIX':
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

class ContextHelper extends ContextProvider {
    constructor(uniqueKey) {
        super();
        this._contextStore = {};
        this._uniqueKey = uniqueKey;
    }

    getUniqueKey() {
        return this._uniqueKey;
    }

    save(key, value) {
        this._contextStore[key] = value;
    }

    get(key) {
        return this._contextStore[key];
    }

    remove(key) {
        delete this._contextStore[key];
    }
}

export { getLayoutProvider, getDataProvider, ContextHelper };
