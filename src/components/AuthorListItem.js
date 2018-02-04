import React, { Component } from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    Image,
    ListView,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { selectArticle } from '../actions';
import ArticleListItem from './ArticleListItem';

class AuthorListItem extends Component {
    componentWillMount() {
        this.initDataSource(this.props.articles);
    }

    componentWillReceiveProps(nextProps) {
        this.initDataSource(nextProps.articles);
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    initDataSource(articles) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(articles);
    }

    renderChevron() {
        const { imageStyle } = styles;

        if (this.props.selected) {
            return <Image style={imageStyle} source={require('../images/chevron-up.png')} />
        }

        return <Image style={imageStyle} source={require('../images/chevron-down.png')} />
    }

    renderRow(item) {
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

    renderArticlesList() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }

    render() {
        const { name } = this.props.author;
        const {
            containerStyle,
            authorNameStyle
        } = styles;

        return (
            <TouchableWithoutFeedback onPress={this.props.onItemPress}>
                <View>
                    <View style={containerStyle}>
                        <Text style={authorNameStyle}>{name}</Text>
                        {this.renderChevron()}
                    </View>
                    {this.renderArticlesList()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
        backgroundColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    authorNameStyle: {
        fontSize: 16,
        flex: 1
    },
    imageStyle: {
        margin: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const authorId = ownProps.author.id;
    const selected = authorId === state.authors.item;
    const articles = selected ? state.article.filteredList : [];

    return { selected, articles };
};

export default connect(mapStateToProps, { selectArticle })(AuthorListItem);
