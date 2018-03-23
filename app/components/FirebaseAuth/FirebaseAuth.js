/**
 * React-Native-Examples
 * Emanuele Maso
 * https://github.com/ClarkStoro
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';

import * as firebase from "firebase";

export default class FirebaseAuth extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Firebase Auth',
        headerStyle: {
            backgroundColor: '#1565c0',
        },
        headerTintColor: 'white',
        headerLeft:
        <TouchableWithoutFeedback onPress={() => navigation.navigate('DrawerOpen')} title="=">
            <Image source={require('React_Native_Examples/app/images/iconHamburger.png')} style={{ marginLeft: 10, marginRight: 10, width: 30, height: 30, }} />
        </TouchableWithoutFeedback>,
    });

    constructor() {
        super();
        this.state= {
            emailLogin: '',
            passwordLogin: '',

            emailSignUp: '',
            passwordSignUp: '',

            emailLost: '',
        };
    }


    login() {
        const constr = this;
        firebase.auth().signInWithEmailAndPassword(this.state.emailLogin, this.state.passwordLogin).then(function (user){
            Alert.alert("Success", "Signed in");
            constr.setState({
                emailLogin: '',
                passwordLogin: '',
            });
        }).catch(function(e){
            Alert.alert("Login failed", "Check your connection and if text fields are correct");
        })
    }//end signIn


    signUp() {
        const constr = this;
        firebase.auth().createUserWithEmailAndPassword(this.state.emailSignUp, this.state.passwordSignUp).then(function (user) {
            Alert.alert("Success", "Signed up");
            user.sendEmailVerification(); //optional: if you want to send a verification email
            constr.setState({
                emailSignUp: '',
                passwordSignUp: '',
            });
        }).catch(function (e) {
            Alert.alert("Sign up failed", "Check your connection and if text fields are correct");
        })
    }//end signUp

    pswLost() {
        const constr = this;
        firebase.auth().sendPasswordResetEmail(this.state.emailLost).then(function () {
            Alert.alert("Success", "Check your email");
            constr.setState({
                emailLost: ''
            });
        }).catch(function (e) {
            Alert.alert("Password reset failed", "Check your connection and if text field is correct");
        })
    }//end pswLost



    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <TextInput
                            value={this.state.emailLogin}
                            placeholder="Email"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordLoginInput.focus()}
                            onChangeText={(value) => this.setState({ emailLogin: value })}
                        />
                        <TextInput 
                            value={this.state.passwordLogin}
                            placeholder="Password"
                            secureTextEntry={true}
                            returnKeyType="done"
                            ref={(input) => this.passwordLoginInput = input}
                            onChangeText={(value) => this.setState({ passwordLogin: value })}
                        />
                        <Button title="Login" onPress={this.login.bind(this)}/>
                    </View>

                    <View>
                        <TextInput
                            value={this.state.emailSignUp}
                            placeholder="Email"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordSignUpInput.focus()}
                            onChangeText={(value) => this.setState({ emailSignUp: value })}
                        />
                        <TextInput
                            value={this.state.passwordSignUp}
                            placeholder="Password"
                            secureTextEntry={true}
                            returnKeyType="done"
                            ref={(input) => this.passwordSignUpInput = input}
                            onChangeText={(value) => this.setState({ passwordSignUp: value })}
                        />
                        <Button title="Sign Up" onPress={this.signUp.bind(this)} />
                    </View>

                    <View>
                        <TextInput
                                value={this.state.emailLost}
                                placeholder="Email"
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ emailLost: value })}
                        />
                        <Button title="Reset password" onPress={this.pswLost.bind(this)} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    marginLeft: 10,
    marginRight: 10,
  },
});

AppRegistry.registerComponent('React_Native_Examples', () => FirebaseAuth);