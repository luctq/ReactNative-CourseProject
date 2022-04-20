import React, { Component } from "react";
import ListItem from "./ListItem";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ViewMore from "./ViewMore";

class List extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
  }
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
    const { item } = this.props;
    return (
      <View>
        <FlatList
          data={item}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
export default List;
