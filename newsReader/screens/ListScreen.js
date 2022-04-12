import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getNews } from "../resources/api";
import List from '../components/List';
import Loading from '../components/Loading';
import { View } from 'react-native';

// Set up list screen and connect to store
class ListScreen extends Component {

  constructor(props) {
      super(props); 
      this.navigateToDetail = this.navigateToDetail.bind(this);
  }

  componentDidMount() {
        this.props.onLoad();
    }

  navigateToDetail(item) {
    this.props.navigation.navigate('Details', {
      item: item
    });
  }

    render() {
      const articles = this.props.news.articles;

      return (
        <View>
      {/*Display spinner if the news is loading, otherwise display articles list*/}
          { this.props.isLoading ? <Loading />
            : <List item={articles} navigateToDetail={this.navigateToDetail} />
          }
        </View>
      );
    }
}

// Set header bar for list screen
ListScreen.navigationOptions = {
  title: 'BBC News Headlines'
};

// Get news and loading status from store and map to props
const mapStateToProps = state => ({
    news: state.news,
    isLoading: state.isLoading
});

// Call the API when the screen loads
const mapDispatchToProps = dispatch => {
    return {
       onLoad: () => dispatch(getNews()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
