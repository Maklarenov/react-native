import React from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login to App</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => alert("Login works")}
                    >
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={() => alert("Signup works")}
                    >
                        <Text style={styles.btnTxt}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


HomeScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 30,
        fontFamily: 'space-mono',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
    },
    userBtn: {
        backgroundColor: "#DDDDDD",
        padding: 15,
        width: "45%",
    },
    btnContainer: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-around',
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
    }
});
