import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button,Card, CardSection,Input, Spinner} from './Common';
import firebase from 'firebase' ;

class LoginForm extends Component{
  state = { email: '', password: '', error: '', loading: false};

onButtonPress(){
  const { email,password } = this.state;

  this.setState({error: '', loading: true});

  firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
  });
}
onLoginFail(){
  this.setState({
    error: 'Authentication Failed',
    loading: false
  });
}
onLoginSuccess(){
  this.setState({email:'',
  password:'',
  error: '',
  loading: false
});
}

renderButton(){
  if(this.state.loading){
    return <Spinner size= "small" />;
  }
  return (
    <Button Pressed = {this.onButtonPress.bind(this)}>
        Log in
      </Button>
  );

}
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder= 'user@gmail.com'
            label = 'Email'
            value = {this.state.email}
            onChangeText={email => this.setState({email})}
            />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          placeholder= "password"
          label = "Password"
          value = {this.state.password}
          onChangeText={password => this.setState({password})} />
       </CardSection>

       <Text style= {styles.errorTextStyle}>
        {this.state.error}
       </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
/*          onChangeText={password => this.setState({password})} />
    "password" can be called whatever as it is the variable
    representing the value received from the field
    // justifyContent- Horizontal, alignItems- Vertical
    bind- to make sure we stay in the same context as the class as
    we dont know when it will be run
    */
