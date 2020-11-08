const hashCache = {};

export const hashHelper = (s) => {
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
