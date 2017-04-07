/**
 * Created by ouyangyi@manqian.cn on 17/4/7.
 */

import React, {Component}from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import * as Utils from '../utils/utils';
import CountDownTimer from '../view/countDownTimer';
import showCountDownTimerPage from './showCountDownTimerPage';

const {width} = Dimensions.get('window');

export default class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Utils.hideWarningYellowBox(); //消除黄色警告

    }

    _jumpCountDownTimePage() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'showCountDownTimerPage',
                component: showCountDownTimerPage,
                // params: {
                //     title: '首页',
                // },
            })
        }
    }

    _defaultCountDownTimePage(){
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'CountDownTimer',
                component: CountDownTimer,
                // params: {
                //     title: '首页',
                // },
            })
        }
    }

    render() {
        return (
            <View style={styles.containerView}>
                <TouchableOpacity
                    style={{marginBottom:20}}
                    onPress={() => {
                        this._defaultCountDownTimePage();
                    }}>
                    <Text style={styles.instructions}>
                        {'点击查看默认倒计时'}
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => {
                        this._jumpCountDownTimePage();
                    }}>
                    <Text style={styles.instructions}>
                        {'点击查看传参数倒计时'}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    };
}


const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },


});
