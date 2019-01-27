import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/LoginScreen';
import * as authKeys from './constants/firebase';
import firebase from 'firebase';



export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    loggedIn:null
  };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: authKeys.API_KEY,
      authDomain: authKeys.AUTH_DOMAIN,
      databaseURL: authKeys.DATABASE_URL,
      projectId: authKeys.PROJECT_ID,
      storageBucket: authKeys.STORAGE_BUCKET,
      messagingSenderId: authKeys.MESSAGING_SENDER_ID
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn:true});
      }
      else {
        this.setState({loggedIn:false});
      }
    });
    this._signInAsync();
  }
  _signInAsync = async () => {
      this.setState({
        loggedIn: 'true',
      },
    );
    let user = {
      LoggedIn: this.state.loggedIn,
      user_name:  '',
      password:  '',
      remember: ''
    }

    await AsyncStorage.setItem('User', JSON.stringify(user));
 };
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
