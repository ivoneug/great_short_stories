import { ARTICLE_SCROLL } from '../actions/types';

export default (state = 0, action) => {
    switch (action.type) {
        case ARTICLE_SCROLL:
            return action.payload;

        default:
            return state;
    }
};
