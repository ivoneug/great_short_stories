import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import { selectArticle } from '../actions';
import ArticleListItem from './ArticleListItem';

class ArticleList extends Component {
    componentWillMount() {
        this.dataSource = this.props.articles;
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    renderRow({ item }) {
        return (
            <ArticleListItem
                onItemPress={() => {
                    this.props.selectArticle(item);
                    Actions.article();
                }}
                article={item}
            />
        );
    }

    render() {
        const { containerStyle } = styles;

        return (
            <FlatList
                style={containerStyle}
                data={this.dataSource}
                renderItem={this.renderRow.bind(this)}
                keyExtractor={(item) => {
                    return this.dataSource.indexOf(item);
                }}
            />
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white'
    }
};

const mapStateToProps = (state) => {
    return { articles: state.article.list };
};

export default connect(mapStateToProps, { selectArticle })(ArticleList);
