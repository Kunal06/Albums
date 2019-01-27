import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.Main();
  }

  // Fetch the token from storage then navigate to our appropriate place
  Main = () => {
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <SafeAreaView style={styles.loggedIncontainer}>
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loggedIncontainer:
      {
        flex: 1,
        backgroundColor:'#fff',
      },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
