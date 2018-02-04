import {
    ARTICLE_SELECT,
    ARTICLES_LIST,
    ARTICLE_SCROLL,
    AUTHOR_SELECT
} from '../actions/types';
import data from './data.json';

const INITIAL_STATE = {
    list: data.articles.sort((x, y) => {
        if (x.title < y.title) return -1;
        if (x.title > y.title) return 1;
        return 0;
    }),
    filteredList: [],
    item: {
        title: '',
        author: '',
        textItems: []
    },
    position: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ARTICLES_LIST:
            return state;

        case ARTICLE_SELECT:
            return {
                ...state,
                item: data.articles.find((item) => item.title === action.payload),
                position: 0
            };

        case ARTICLE_SCROLL:
            return {
                ...state,
                position: action.payload
            };

        case AUTHOR_SELECT:
            return {
                ...state,
                filteredList: state.list
                    .filter((article) => article.author.id === action.payload)
            };

        default:
            return state;
    }
};
