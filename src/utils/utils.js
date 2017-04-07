/**
 * 常用工具类
 * Created by
 * ouyangyi@manqian.cn on 16/9/21.
 */

import React, {Component}from 'react';
import {
    Platform,
    DeviceEventEmitter,
    Linking,
    Alert
}from 'react-native';
import NativeInterface from '../nativeInterface';


export function hideWarningYellowBox() {

     console.disableYellowBox = true; //消除黄色警告
}


/**
 * 获取props里的某个值
 * @param data            需要获取的数据
 * @param defaultData     为空时返回的数据
 * @returns {*}           返回数据
 */
export function getPropsData(data, defaultData) {
    return data === undefined ? defaultData : data;
}

/**
 * 返回上一个页面(当前页面已是最后一个页面时,双击退出应用)
 * @param navigator
 * @returns {boolean}
 * @private
 */
export const _onBackAndroid = (navigator) => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }

    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        return false;
    }
    this.lastBackPressed = Date.now();
    NativeInterface.showToast('再按一次退出应用');
    return true;

};


/**
 * pop到路由指定的页面,指定页面以上其他页面的都会卸载
 * @param pageName
 */
export function popKnowPage(pageName, navigator) {
    let route;
    if (navigator != undefined) {
        for (i = 0; i < navigator.getCurrentRoutes().length; i++) {
            if (navigator.getCurrentRoutes()[i].component == pageName) {
                route = navigator.getCurrentRoutes()[i];
                break;
            }
        }
        if (route != undefined) {
            navigator.popToRoute(route);
            return true;
        } else {
            return false;
        }
    }

}


