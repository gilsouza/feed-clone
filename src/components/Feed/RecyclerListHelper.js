import { LayoutProvider, DataProvider } from 'recyclerlistview/web';

import { ContextProvider } from 'recyclerlistview';

const getWindowWidth = () => {
    // To deal with precision issues on android.
    return Math.round(window.innerWidth * 1000) / 1000 - 15; //Adjustment for margin given to RLV;
};

const getLayoutProvider = () => {
    return new LayoutProvider(
        () => {
            return 'FIX';
        },
        (type, dim) => {
            switch (type) {
                case 'FIX':
                    dim.width = getWindowWidth();
                    dim.height = 300;
                    break;
                default:
                    dim.width = 25;
                    dim.height = 25;
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
