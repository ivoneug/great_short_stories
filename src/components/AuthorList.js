import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { selectAuthor } from '../actions';
import AuthorListItem from './AuthorListItem';

class AuthorList extends Component {
    componentWillMount() {
        this.dataSource = this.props.authors;
    }

    renderRow({ item }) {
        return (
            <AuthorListItem
                onItemPress={() => this.props.selectAuthor(item)}
                author={item}
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
                keyExtractor={(item) => item.id}
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
    return {
        authors: state.authors.list
    };
};

export default connect(mapStateToProps, { selectAuthor })(AuthorList);
