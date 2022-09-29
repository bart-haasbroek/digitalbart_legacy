const importAllImages = () => {
    const allImages = require.context('../static/images/patterns', true, /\.jpg|\.png$/);
    return allImages.keys().map((key) => allImages(key));
}

const getLocalPatterns = () => {
    let patterns = [];
    if (process.browser) {
        patterns = localStorage.getItem('localPatterns') ? JSON.parse(localStorage.getItem('localPatterns')) : [];
    }
    return patterns;
}

const patternList = (list) => {
    return list.map((image, index) => {
        return {
            id: index,
            image
        }
    })
}

export const state = () => ({
    currentPattern: undefined,
    patterns: []
});

export const mutations = {
    getPatterns(state) {
        state.patterns = [
            ...getLocalPatterns(),
            ...patternList(importAllImages())
        ];
    },
    setCurrentPattern(state, payload) {
        state.currentPattern = payload;
    },
    addPattern(state, payload) {
        state.currentPattern = payload;
        state.patterns.unshift(payload);
        const localPatterns = getLocalPatterns();
        const newPatterns = [payload, ...localPatterns];
        localStorage.setItem('localPatterns', JSON.stringify(newPatterns))
    },
    removePattern(state, payload) {
        const localPatterns = getLocalPatterns();
        const newPatterns = state.patterns.filter((pattern) => pattern.id !== payload);
        const newLocalPatterns = localPatterns.filter((pattern) => pattern.id !== payload);
        localStorage.setItem('localPatterns', JSON.stringify(newLocalPatterns))
        state.patterns = newPatterns;
    },
    resetCurrentPattern(state) {
        state.currentPattern = undefined;
    }
}

export const getters = {
    getCurrentPattern: (state) => {
        return state.currentPattern;
    },
    getPatterns: (state) => {
        return state.patterns;
    },
    getAll: (state) => {
        return importAllImages();
    },
}