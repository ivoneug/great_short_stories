import { ARTICLES_FILTER } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case ARTICLES_FILTER:
            return action.payload.articles
                    .filter((article) => article.author.id === action.payload.authorId);

        default:
            return state;
    }
};
