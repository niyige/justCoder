/**
 * 倒计时
 * Created by
 * ouyangyi on 16/11/8.
 *
 * -----------------------------------------------
 * 使用 : 在样式不需要改变的情况下  传一个时间戳,一个主页面的方法(倒计时完了,定时触发用来刷新主页面)即可
 *
 * millisUntilFinished   毫秒  (必传)
 * refreshData           刷新主页面的方法
 *
 *    <CountDownTimer style={styles.countDownTimer}
                      textTimeStyle={styles.textTimer}
                      textUnitStyle={[styles.textTimer,{color:Dimens.color_text_66}]}
                      millisUntilFinished={millisTime}
                      refreshData={this.props.refreshData}
 />
 */

'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';

//时间转化率
const ss = 1000;
const mi = ss * 60;
const hh = mi * 60;
const da = hh * 24;


export default class CountDownTimer extends Component {

//属性类型：
    static propTypes = {
        // textTimeStyle: React.PropTypes.object,
        // textUnitStyle: React.PropTypes.object,
        millisUntilFinished: React.PropTypes.number,
        refreshData: React.PropTypes.func,
        day: React.PropTypes.number,
        hour: React.PropTypes.number,
        minute: React.PropTypes.number,
        second: React.PropTypes.number,
    }

    constructor(props) {
        super(props);
        // 计算剩余的天、小时、分钟、秒钟, 默认都是0
        let day = this.props.millisUntilFinished == undefined ? 0 : (this._handlerNumber(this.props.millisUntilFinished, da));
        let hour = this.props.millisUntilFinished == undefined ? 0 : this._handlerNumber(this.props.millisUntilFinished -
            this._handlerMultiplyNumber(day, da), hh);
        let minute = this.props.millisUntilFinished == undefined ? 0 : this._handlerNumber(this.props.millisUntilFinished -
            this._handlerMultiplyNumber(day, da) - this._handlerMultiplyNumber(hour, hh), mi);
        let second = this.props.millisUntilFinished == undefined ? 0 : this._handlerNumber(this.props.millisUntilFinished -
            this._handlerMultiplyNumber(day, da) - this._handlerMultiplyNumber(hour, hh) - this._handlerMultiplyNumber(minute, mi), ss);

        this.state = {
            day: day,
            hour: hour,
            minute: minute,
            second: second
        }
    }

    componentDidMount() {
        this._startCountDownTimer();   //开始倒计时
    }

    componentWillUnmount() {
        this._stopCountDownTimer();   //结束倒计时
    }

    /**
     * 开始倒计时
     * @private
     */
    _startCountDownTimer() {
        const {day, hour, minute, second} = this.state;
        console.log("剩余 " + day + "天" + hour + "时" + minute + "分" + second + "秒");
        this.interval = setInterval(() => {
            if (day != 0 || hour != 0 || minute != 0 || second != 0) {

                if (this.state.second == 0) {
                    if (this.state.minute == 0) {
                        if (this.state.hour == 0) {
                            if (this.state.day == 0) {
                                this._endCountDownTimer();
                            } else { //天数不为0
                                this.setState({
                                    day: this.state.day - 1,
                                    hour: 23,
                                    minute: 59,
                                    second: 59
                                })
                            }
                        } else { //小时不为0
                            this.setState({
                                hour: this.state.hour - 1,
                                minute: 59,
                                second: 59
                            })
                        }
                    } else {    //分不为0
                        this.setState({
                            minute: this.state.minute - 1,
                            second: 59
                        })
                    }
                } else {    //秒不为0
                    this.setState({
                        second: this.state.second - 1
                    });
                }
            } else {
               // this._endCountDownTimer();
            }
        }, 1000);
    }

    //倒计时结束调用
    _endCountDownTimer(){
        if (this.props.millisUntilFinished != 0 || this.props.millisUntilFinished != undefined) {
            this.props.refreshData();
        }
        this.setState({
            day: 0,
            hour: 0,
            minute: 0,
            second: 0

        })
        this._stopCountDownTimer();
    }
    /**
     *  页面关闭时,停止倒计时
     * @private
     */
    _stopCountDownTimer() {
        //触发主页面方法
        // if (this.props.millisUntilFinished != 0 && this.props.millisUntilFinished != undefined) {
        //    () => {
        //    }
        // }

        this.interval && clearInterval(this.interval);

    }

    /**
     *  当传入的数字是一位数,在前面补0,凑足2位
     * @param data    天,时,分,秒
     * @returns {*}
     * @private
     */
    _addNumber(data) {
        if (data != 0 && data != undefined) {
            if (data < 10) {
                return '0' + data;
            }
            return data;
        } else {
            return '00';
        }

    }

    /**
     * 处理数据
     * @param time  时间
     * @param data  转换率
     * @private
     */
    _handlerNumber(time, data) {
        if (time < data) {
            return 0;
        } else if (time == data) {
            return 1;
        } else {
            return parseInt(time / data);  //取整
        }
    }

    /**
     *两数相乘,,处理  0* data 或者 data * 0   的问题
     * @param data1
     * @param data2
     * @private
     */
    _handlerMultiplyNumber(data1, data2) {
        if (data1 != undefined && data2 != undefined && data1 != 0 && data2 != 0) {
            return data1 * data2;
        }
        return 0;
    }


    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                <Text style={[{fontSize: 15, color: 'red', marginLeft: 4}, this.props.textTimeStyle]}>
                    {this._addNumber(this.state.day)}
                </Text>
                <Text style={[{fontSize: 15,}, this.props.textUnitStyle]}>
                    {'天'}
                </Text>
                <Text style={[{fontSize: 15, color: 'red', marginLeft: 4}, this.props.textTimeStyle]}>
                    {this._addNumber(this.state.hour)}
                </Text>
                <Text style={[{fontSize: 15,}, this.props.textUnitStyle]}>
                    {'时'}
                </Text>
                <Text style={[{fontSize: 15, color: 'red', marginLeft: 4}, this.props.textTimeStyle]}>
                    {this._addNumber(this.state.minute)}
                </Text>
                <Text style={[{fontSize: 15,}, this.props.textUnitStyle]}>
                    {'分'}
                </Text>
                <Text style={[{fontSize: 15, color: 'red', marginLeft: 4}, this.props.textTimeStyle]}>
                    {this._addNumber(this.state.second)}
                </Text>
                <Text style={[{fontSize: 15,}, this.props.textUnitStyle]}>
                    {'秒'}
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    }

})