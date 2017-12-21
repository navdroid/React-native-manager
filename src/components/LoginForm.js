import React,{Component} from 'react';
import {Text} from 'react-native'
import {Card,CardSection,Input,Button,Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged , passwordChanged,loginUser} from '../actions';

class LoginForm extends Component{
  onEmailChange(text){
    this.props.emailChanged(text);

  }
  onPasswordChange(text){
    this.props.passwordChanged(text);

  }
  onButtonPress(){
    const{email,password} =this.props;
    this.props.loginUser({email,password});

  }
  renderButton(){
    if(this.props.loading){
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>);
  }


  render(){
     return(
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange.bind(this)}
            label="Email"
            value={this.props.email}
            placeholder="email@gmail.com"/>
        </CardSection>
        <CardSection>
          <Input
            onChangeText={this.onPasswordChange.bind(this)}
            isPassword ={true}
            label="Password"
            value={this.props.password}
            placeholder="password"/>
        </CardSection>

        <Text style={ styles.errorStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>

    );
  }
}

const styles={
  errorStyle:{
    fontSize:20,
    alignSelf: 'center',
    color : 'red'
  }
}

// const mapsStateToProps = state =>{
//   return{
//     email: state.auth.email,
//     password: state.auth.password
//     error: state.auth.error
//   }
// }

const mapsStateToProps = ({auth}) =>{
  const{email,password,error,loading} =auth;
  return{
    email,password,error,loading
  };
}

export default connect(mapsStateToProps,{emailChanged,
  passwordChanged,loginUser
})(LoginForm);
