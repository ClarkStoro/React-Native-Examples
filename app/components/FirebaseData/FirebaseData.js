import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

//Import firebase writing from console: 'npm install firebase --save'
import * as firebase from "firebase";

export default class FirebaseData extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Firebase Data',
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
        this.itemsRef = firebase.database().ref();
        this.dbRef = this.itemsRef.child('posts').child('-KhBxtNxen5cw12GoGU2').child('Title');
        this.dbRefNew = this.itemsRef.child('posts');

        this.state = {
            txt: '',
            TitleM: '',
            Title: '',
            Post:'',
            Username:'',
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        //With "on" data will refresh automatically when the title change, with once will not realtime
        this.dbRef.on('value', snapshot => {
            this.setState({
                TitleM: snapshot.val(),
            });
        });
    }//end getData

    modify() {
        this.dbRef.set(this.state.txt);
    }//end modify

    newPost() {
        const constr = this;
        var idNewPost = this.itemsRef.child("post").push().getKey(); //get a unique key for new record
        //create a new branch with the id created
        this.dbRefNew.child(idNewPost).set({
            Title: constr.state.Title,
            Post: constr.state.Post,
            Username: constr.state.Username,
        });
        Alert.alert("Post saved!");
        //once the post is saved, reset the text input field
        this.setState({
            Title: '',
            Post: '',
            Username: '',
        });
    }//end newPost

    render() {
        return ( 
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.modify}>
                        <Text style={styles.section}>MODIFY TITLE OF A PARTICULAR POST</Text>
                        <Text style={styles.txtTitleM}>Title on db: {this.state.TitleM}</Text>
                        <TextInput
                            placeholder="Write here to modify the title"
                            onChangeText={(value) => this.setState({txt : value})}
                        />
                        <Button title="MODIFY EXISTING TITLE POST" onPress={this.modify.bind(this)}></Button>
                    </View>
                    <View style={styles.separator} />
                    <View>
                        <Text style={styles.section}>CREATE NEW POST</Text>
                        <TextInput
                            value={this.state.Title}
                            placeholder="Write here new title"
                            returnKeyType="next"
                            onSubmitEditing={() => this.postInput.focus()}
                            onChangeText={(value) => this.setState({Title : value})}
                        />
                        <TextInput
                            value={this.state.Post}
                            placeholder="Write here new post"
                            returnKeyType="next"
                            ref={(input) => this.postInput = input}
                            onSubmitEditing={() => this.usernameInput.focus()}
                            onChangeText={(value) => this.setState({Post : value})}
                        />
                        <TextInput
                            value={this.state.Username}
                            placeholder="Write here author's username"
                            ref={(input) => this.usernameInput = input}
                            returnKeyType="done"
                            onChangeText={(value) => this.setState({Username : value})}
                        />
                        <Button title="CREATE NEW POST" onPress={this.newPost.bind(this)}></Button>
                    </View>
                </View> 
            </ScrollView>
        ) ;
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft: 10,
        marginRight: 10,
    },
    modify:{
        marginTop: 20,
    },
    section:{
        fontSize: 18,
        fontWeight: 'bold',
    },

    txtTitleM:{
        fontSize: 18,
        marginTop: 10,
    },
    separator:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop:20,
        marginBottom: 20,
    },

});



AppRegistry.registerComponent('React_Native_Exaples', () => FirebaseData);
