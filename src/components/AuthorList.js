import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { selectAuthor } from '../actions';
import AuthorListItem from './AuthorListItem';

class AuthorList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.authors);
    }

    renderRow(rowItem) {
        return (
            <AuthorListItem
                onItemPress={() => this.props.selectAuthor(rowItem)}
                author={rowItem}
            />
        );
    }

    render() {
        const { containerStyle } = styles;

        return (
            <ListView
                enableEmptySections
                style={containerStyle}
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
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
