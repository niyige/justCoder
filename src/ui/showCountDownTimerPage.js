/**
 * Created
 * by ouyangyi on 17/4/7.
 */
/**
 * Created by ouyangyi@manqian.cn on 16/9/9.
 */

import React, {Component}from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';

import * as Utils from '../utils/utils';
import CountDownTimer from '../view/countDownTimer';

import NativeInterface from '../nativeInterface';

const {width} = Dimensions.get('window');

export default class showCountDownTimerPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Utils.hideWarningYellowBox(); //消除黄色警告

    }

    _showMessage() {
        NativeInterface.showToast('倒计时结束,触发_showMessage');
    }


    render() {
        return (
            <View style={styles.containerView}>
                <CountDownTimer style={{backgroundColor: 'rgba(0,0,0,0)'}}
                                textTimeStyle={{fontSize: 22, color: '#cccccc', marginBottom: 3}}
                                textUnitStyle={{fontSize: 12, color: '#ccccccc'}}
                                millisUntilFinished={3000000}
                                refreshData={() => this._showMessage()}/>

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
