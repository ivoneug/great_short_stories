import data from './data.json';

const INITIAL_STATE = data.articles.sort((x, y) => {
        if (x.title < y.title) return -1;
        if (x.title > y.title) return 1;
        return 0;
    }).map((item, idx) => {
        return {
            id: idx,
            ...item
        };
    });

export default (state = INITIAL_STATE) => {
    return state;
};
