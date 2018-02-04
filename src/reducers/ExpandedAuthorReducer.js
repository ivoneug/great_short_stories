import { AUTHOR_SELECT } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case AUTHOR_SELECT:
            const item = state !== action.payload ? action.payload : null;

            return item;

        default:
            return state;
    }
};
