/**
 * Created by
 * ouyangyi on 17/3/28.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import NativeInterface from './nativeInterface';

export default class WelcomePage extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() => {
                        NativeInterface.showToast('大声说:Welcome to React Native');
                    }}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        NativeInterface.getAppVersion((success) =>{
                            NativeInterface.showToast(success);
                        }, () => {
                            //获取数据失败回调
                        });
                    }}>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                </TouchableOpacity>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});