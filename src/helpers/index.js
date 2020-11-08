const hashCache = {};

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
