import { ARTICLE_SELECT, ARTICLE_SCROLL } from './types';

export const selectArticle = (article) => {
    return {
        type: ARTICLE_SELECT,
        payload: article.id
    };
};

export const scrollArticle = (position) => {
    return {
        type: ARTICLE_SCROLL,
        payload: position
    };
};
