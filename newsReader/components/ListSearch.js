import React, { Component } from "react";
import ListItem from "./ListItem";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Search from "./Search";
import ViewMore from "./ViewMore";

class ListSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
    this.renderItem = this.renderItem.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
  }
  setNews = (news) => {
    this.setState({ news: news});
  };
  renderHearder = () => {
    return <Search setNews={this.setNews} />;
  };
  renderItem({ item }) {
    const navigate = () => {
      this.props.navigateToDetail(item);
    };
    // Pass the news item through to the ListItem component to set styles
    return <ListItem item={item} onPress={navigate} />;
  }

  keyExtractor(item, index) {
    return index;
  }
  renderSeparator() {
    const style = { height: 1, backgroundColor: "#ddd", marginLeft: 10 };
    return <View style={style} />;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.news}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHearder}
        />
      </View>
    );
  }
}

export default ListSearch;
