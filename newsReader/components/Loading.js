import React from 'react';

import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

// Set activity indicator to display when news is loading from the API
const Loading = () => {

    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.activity} size="large" color="#bb1919" />
      </View>
    );
  
};

const styles = StyleSheet.create({

  activity: {
    marginTop: 100
  },

  container: {
    flex: 1,
  },

});

export default Loading;