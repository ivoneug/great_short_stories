import { ARTICLE_SELECT } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case ARTICLE_SELECT:
            return action.payload;

        default:
            return state;
    }
};
