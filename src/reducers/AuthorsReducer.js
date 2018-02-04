import data from './data.json';

const INITIAL_STATE = {
    list: Object.keys(data.authors).map((key) => {
        return {
            id: key,
            ...data.authors[key]
        };
    }).sort((x, y) => {
        if (x.name < y.name) return -1;
        if (x.name > y.name) return 1;
        return 0;
    }),
    item: null
};

export default () => {
    return INITIAL_STATE;
};
