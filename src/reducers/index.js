import { combineReducers } from 'redux';
import AuthorsReducer from './AuthorsReducer';
import ExpandedAuthorReducer from './ExpandedAuthorReducer';
import ArticleReducer from './ArticleReducer';
import FilteredArticlesReducer from './FilteredArticlesReducer';
import ScrollArticleReducer from './ScrollArticleReducer';
import SelectArticleReducer from './SelectArticleReducer';
import ImageReducer from './ImageReducer';

export default combineReducers({
    authors: AuthorsReducer,
    expandedAuthor: ExpandedAuthorReducer,

    articles: ArticleReducer,
    filteredArticles: FilteredArticlesReducer,
    selectedArticle: SelectArticleReducer,
    position: ScrollArticleReducer,

    imageStore: ImageReducer
});
