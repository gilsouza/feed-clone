const hashCache = {};

export const DEFAULT_TIMEOUT = 30000;

/**
 * Implementação simples de hash apenas para gerar um int para "id" de post
 *
 * @param {object} obj entrada para hash
 */
export const hashHelper = (obj) => {
    const s = JSON.stringify(obj);
    if (s in hashCache) return hashCache[s];

    let hash = 0,
        i,
        chr;
    for (i = 0; i < s.length; i++) {
        chr = s.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }

    hashCache[s] = hash;

    return hash;
};

export const normalizeUserName = (userName) =>
    userName.toLowerCase().replace(' ', '_');

export const userAt = (userName) => `@${normalizeUserName(userName)}`;

export const timeoutPromise = (ms, promise) => {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Promise request timeout'));
        }, ms);
        promise.then(
            (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            (err) => {
                clearTimeout(timeoutId);
                reject(err);
            }
        );
    });
};
