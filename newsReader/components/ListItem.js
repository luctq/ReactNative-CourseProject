import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

// Set styles and truncation for each headline
class ListItem extends Component {

  render() {    
    const {item, onPress} = this.props;
      return (
          <TouchableHighlight underlayColor='#bb1919' onPress={onPress}>
            <View style={styles.container}>
              <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      );
    }
}

const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5
  },

  container: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  }
});


export default ListItem;