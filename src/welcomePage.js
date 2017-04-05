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
    TouchableOpacity,
    Dimensions
} from 'react-native';

import NativeInterface from './nativeInterface';
import SimpleTextView from './androidview/simpleTextView';

const {height, width} = Dimensions.get('window'); //设置view占满屏幕宽度

export default class WelcomePage extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() => {
                        NativeInterface.showToast('Welcome to React Native');
                    }}>
                    <Text style={styles.welcome}>
                        {'点击弹出原生toast'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        NativeInterface.getAppVersion((success) => {
                            NativeInterface.showToast(success);
                        }, (error) => {
                            //获取数据失败回调
                        });
                    }}>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                </TouchableOpacity>

                <SimpleTextView
                    style={{width: width, height: 40}}
                    text={'我是原生的TextView,你怕不怕'}
                    textSize={15}
                    textColor={'black'}
                    textGravity = {'center'}
                />

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