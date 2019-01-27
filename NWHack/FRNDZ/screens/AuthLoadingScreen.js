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
import firebase from 'firebase';
import * as authKeys from '../constants/firebase';

export default class AuthLoadingScreen extends React.Component {
  state= { loggedIn:null};
  constructor(props) {
    super(props);
    this._bootstrapAsync();
    //this.Main();
  }
  _bootstrapAsync = async () => {
    const userToken = JSON.parse (await AsyncStorage.getItem('User'));
    if (userToken == null){
      this.props.navigation.navigate('Auth');
      let user = {
        LoggedIn: false,
        user_name:  '',
        password:  '',
        remember: false
      }

        await AsyncStorage.setItem('User', JSON.stringify(user));

    } else {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken.LoggedIn == "true" ? 'Main' : 'Auth');
       }
  };
  // Fetch the token from storage then navigate to our appropriate place
  Main = () => {
    if(this.state.loggedIn){
      this.props.navigation.navigate('Main');
    }
    else{
      this.props.navigation.navigate('Auth');
    }
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
