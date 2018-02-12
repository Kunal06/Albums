import React,{Component} from'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './Components/Common';
import LoginForm from './Components/LoginForm'



class App extends Component{
state= { loggedIn:null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyADyu6HKZT3LK5lHX-cXAaQaxVaSG4XFk0',
      authDomain: "auth-06.firebaseapp.com",
      databaseURL: "https://auth-06.firebaseio.com",
      projectId: "auth-06",
      storageBucket: "auth-06.appspot.com",
      messagingSenderId: "151275976346"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn:true});
      }
      else {
        this.setState({loggedIn:false});
      }
    });

  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
      return (
        <View style= {styles.viewStyle}>
        <Button Pressed= {() => firebase.auth().signOut()}>
          Log out
        </Button>
        </View>
      );
        break;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size= 'large' />;
    }
  }
  render()  {
    return (
      <View>
        <Header headText= 'Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    flexDirection: 'row',
    position: 'relative'
  }
};
export default App;
