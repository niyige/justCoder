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
import TitleBar from '../view/titleBar';
import * as Dimens from '../value/dimens';
import ShowTitlePage from '../ui/showTitlePage';

const {width} = Dimensions.get('window');

export default class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Utils.hideWarningYellowBox(); //消除黄色警告

    }

    /**
     * 跳普通倒计时页
     * @private
     */
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

    /**
     * 跳默认倒计时页
     * @private
     */
    _defaultCountDownTimePage() {
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

    /**
     * 跳  查看标题页
     * @private
     */
    _showTitleBarPage() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'ShowTitlePage',
                component: ShowTitlePage,
                // params: {
                //     title: '首页',
                // },
            })
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: Dimens.color_bg_f2}}>
                <TitleBar
                    centerText={'首页'}
                    isShowLeftBackIcon={true}
                    navigator={this.props.navigator}
                />

                <View style={styles.containerView}>

                    <TouchableOpacity
                        style={{marginBottom: 20}}
                        onPress={() => {
                            this._showTitleBarPage();
                        }}>
                        <Text style={{ fontSize: 15,}}>
                            {'点击查看各种标题'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{marginBottom: 20}}
                        onPress={() => {
                            this._defaultCountDownTimePage();
                        }}>
                        <Text style={{ fontSize: 15,}}>
                            {'点击查看默认倒计时'}
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            this._jumpCountDownTimePage();
                        }}>
                        <Text style={{ fontSize: 15,}}>
                            {'点击查看传参数倒计时'}
                        </Text>
                    </TouchableOpacity>
                </View>
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
