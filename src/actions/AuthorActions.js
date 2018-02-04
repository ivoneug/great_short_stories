import { AUTHOR_SELECT, ARTICLES_FILTER } from './types';

export const selectAuthor = (author) => {
    return (dispatch, getState) => {
        dispatch({
            type: AUTHOR_SELECT,
            payload: author.id
        });

        dispatch({
            type: ARTICLES_FILTER,
            payload: {
                authorId: author.id,
                articles: getState().articles
            }
        });
    };
};
