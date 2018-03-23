import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Alert,
    ScrollView,
    Dimensions,
} from 'react-native';

import {
    StackNavigator,
    NavigationActions,
} from 'react-navigation';


export default class NavBar extends Component {

    constructor() {
        super();
    
        var iconNav = require('React_Native_Examples/app/images/iconNav.png');

        this.iconImages = {
            iconNav: iconNav,
        };
    }

    componentDidMount() {
    }


    redirect(numCat) {
        var route= '';
        switch(numCat){
            case 1:
                route = 'ArrayListNav';
                break;
            case 2:
                route = 'JSONListNav';
                break;
            case 3:
                route = 'dbLocaleNav';
                break;
            case 4:
                route = 'DeviceInfoNav';
                break;
            case 5:
                route = 'TranslationsNav';
                break;
            case 6:
                route = 'FirebaseDataNav';
                break;
            case 7:
                route = 'FirebaseListNav';
                break;
            case 8:
                route = 'FirebaseAuthNav';
                break;

            
            default:
                route = 'HomeNav';
        }

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: route,
                }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }//end redirect


    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={{flex:1,}}>
                    <View style={stili.headerNav}>
                        <Text style={stili.nameNav}>React Native Examples</Text>
                    </View>
                    <View style={stili.group1Nav}>
                        <TouchableWithoutFeedback onPress={this.redirect.bind(this, 0)}>
                            <View style={stili.rowGrNav}>
                                <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                <Text style={stili.txtGrNav}>Home</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>


                    <View style={stili.separatorNav} />   

                    <View style={stili.group2Nav}>
                            <TouchableWithoutFeedback onPress={this.redirect.bind(this, 1)}>
                                <View style={stili.rowGrNav}>
                                    <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                    <Text style={stili.txtGrNav}>Array List</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={this.redirect.bind(this, 2)}>
                                <View style={stili.rowGrNav}>
                                    <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                    <Text style={stili.txtGrNav}>JSON List</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={this.redirect.bind(this, 3)}>
                                <View style={stili.rowGrNav}>
                                    <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                    <Text style={stili.txtGrNav}>dbLocale</Text>
                                </View>
                            </TouchableWithoutFeedback>
                    </View>

                    <View style={stili.separatorNav} />   

                    <View style={stili.group3Nav}>
                        <TouchableWithoutFeedback onPress={this.redirect.bind(this, 4)}>
                            <View style={stili.rowGrNav}>
                                <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                <Text style={stili.txtGrNav}>Device Info</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.redirect.bind(this, 5)}>
                            <View style={stili.rowGrNav}>
                                <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                <Text style={stili.txtGrNav}>Translations</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={stili.separatorNav} />

                    <View style={stili.group4Nav}>
                        <TouchableWithoutFeedback onPress={this.redirect.bind(this, 6)}>
                            <View style={stili.rowGrNav}>
                                <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                <Text style={stili.txtGrNav}>Firebase Data</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.redirect.bind(this, 7)}>
                            <View style={stili.rowGrNav}>
                                <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                <Text style={stili.txtGrNav}>Firebase List</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.redirect.bind(this, 8)}>
                            <View style={stili.rowGrNav}>
                                <Image source={this.iconImages.iconNav} style={stili.imgGrNav} />
                                <Text style={stili.txtGrNav}>Firebase Auth</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const {width, height} = Dimensions.get('window');

const stili ={
    //header
    headerNav: {
        paddingTop:15,
        flex:1,
        backgroundColor: '#231A35',
        height: height * 0.28,
        
        alignItems: "stretch",
        backgroundColor: '#1565c0'
    },

    backImageNav: {
        flex:1,
        width: null,
        height: null,       
    },

    nameNav: {
        fontSize: 18,
        textAlign: 'left',
        marginLeft: 15,
        marginTop: height * 0.20,
        marginBottom:20,
        color: 'white'
    },


    //primo gruppo di elementi
    group1Nav: {
        height: 'auto',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
    },
    //gruppo2
    group2Nav: {
        height: 'auto',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
    },

    txtTitleGr2Nav: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 15,
        marginBottom: 5,
    },
    //gruppo3
    group3Nav: {
        height: 'auto',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
    },
    //gruppo4
    group4Nav: {
        height: 'auto',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 15,
    },

    //elementi comuni a ogni riga
    rowGrNav: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10,
    },
    imgGrNav: {
        width: 30,
        height: 30,
    },
    txtGrNav: {
        textAlign: 'left',
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray'
    },

    //linea separatrice
    separatorNav: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
};




AppRegistry.registerComponent('React_Native_Example', () => NavBar);
