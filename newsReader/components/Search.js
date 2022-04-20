import React, {Component}from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getSearchNews } from "../resources/api";
class Search extends Component {
  constructor(props) {
    super(props)
    this.handleOnChangeText = this.handleOnChangeText.bind(this)
  }
  async handleOnChangeText(textSearch)  {
    await this.props.onLoad(textSearch);
    // console.log(this.props.news.articles)
    await this.props.setNews(this.props.news.articles)
  }
  render() {
    return (
      <View>
        <TextInput style={styles.inputBorder} placeholder="Search" onChangeText={this.handleOnChangeText}/>
        {/* <Text>{this.props.news.articles}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBorder: {
    height: 40,
    marginHorizontal: "1%",
    marginTop: 40,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50
  },
});
const mapStateToProps = (state) => ({
  news: state.news,
  isLoading: state.isLoading,
});

// Call the API when the screen loads
const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (textSearch) => {
      dispatch(getSearchNews(textSearch))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
