import { combineReducers } from 'redux';
import AuthorsReducer from './AuthorsReducer';
import ArticleReducer from './ArticleReducer';
import ImageReducer from './ImageReducer';

export default combineReducers({
    authors: AuthorsReducer,
    article: ArticleReducer,
    imageStore: ImageReducer
});
