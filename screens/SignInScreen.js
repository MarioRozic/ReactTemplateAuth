import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';

import { onSignIn } from '../services/auth'

export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper} >
                <View style={styles.container}>

                    <Text style={styles.header}>- LOGIN -</Text>
                    <TextInput
                        style={styles.textInput} placeholder="Username"
                        onChangeText={(username) => this.setState({ username })}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        style={styles.textInput} placeholder="Password"
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}
                    >
                        <Text>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnRegister}
                        onPress={this.register}
                    >
                        <Text style={styles.register}>Register</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView >
        );
    }

    login = () => {
        onSignIn(this.state)
            .then(res => {
                this.props.navigation.navigate("SignedIn");
            })
    }

    register = () => {
        this.props.navigation.navigate("Register");
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingRight: 40,
        paddingLeft: 40
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center'
    },
    btnRegister: {
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        padding: 15,
        alignItems: 'center'
    },
    register: {
        fontSize: 14,
        marginBottom: 60,
        color: '#fff',
    },
})
