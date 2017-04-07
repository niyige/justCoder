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
    Dimensions,
    BackAndroid
} from 'react-native';

import NativeInterface from './nativeInterface';
import SimpleTextView from './androidview/simpleTextView';
import MainPage from './ui/mainPage';
import { _onBackAndroid} from  './utils/utils';
import * as Dimens from './value/dimens'

const {height, width} = Dimensions.get('window'); //设置view占满屏幕宽度

export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {

        if (Dimens.isAndroid) {
            const {navigator} = this.props;
            BackAndroid.addEventListener('hardwareBackPress', () => _onBackAndroid(navigator));
        }
    }

    _jumpMain() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'MainPage',
                component: MainPage,
                // params: {
                //     title: '首页',
                // },
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() => {
                        this._jumpMain();
                    }}>
                    <Text style={styles.instructions}>
                        {'点击跳首页'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{marginBottom: 20}}
                    onPress={() => {
                        NativeInterface.showToast('Welcome to React Native');
                    }}>
                    <Text style={styles.welcome}>
                        {'点击弹出原生toast'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{marginBottom: 20}}
                    onPress={() => {
                        NativeInterface.getAppVersion((success) => {
                            NativeInterface.showToast(success);
                        }, (error) => {
                            //获取数据失败回调
                        });
                    }}>
                    <Text style={styles.instructions}>
                        {'点击获取原生数据'}
                    </Text>
                </TouchableOpacity>


                <SimpleTextView
                    style={{width: width, height: 40}}
                    text={'我是原生的TextView,你怕不怕'}
                    textSize={15}
                    textColor={'black'}
                    textGravity={'center'}
                />
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