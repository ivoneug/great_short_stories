import { AUTHOR_SELECT } from './types';

export const selectAuthor = (author) => {
    return {
        type: AUTHOR_SELECT,
        payload: author.id
    };
};
