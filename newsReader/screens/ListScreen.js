import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews, getTopHeadlines } from "../resources/api";
import List from "../components/List";
import Loading from "../components/Loading";
import { View, Button } from "react-native";

// Set up list screen and connect to store
class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.navigateToDetail = this.navigateToDetail.bind(this);
  }

  componentDidMount() {
    this.props.onLoad(this.props.route.params.api);
  }

  navigateToDetail(item) {
    this.props.navigation.navigate("Details", {
      item: item,
    });
  }

  render() {
    const articles = this.props.news.articles;

    return (
      <View>
        <View>
          {/*Display spinner if the news is loading, otherwise display articles list*/}
          {this.props.isLoading ? (
            <Loading />
          ) : (
            <List item={articles} navigateToDetail={this.navigateToDetail} />
          )}
        </View>
      </View>
    );
  }
}

// Set header bar for list screen
ListScreen.navigationOptions = {
  title: "BBC News Headlines",
};

// Get news and loading status from store and map to props
const mapStateToProps = (state) => ({
  news: state.news,
  isLoading: state.isLoading,
});

// Call the API when the screen loads
const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (api) => {
      if (api == "news") {
        dispatch(getNews());
      } else if (api == "topHeadlines") {
        dispatch(getTopHeadlines());
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
