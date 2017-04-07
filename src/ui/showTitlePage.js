/**
 * 都是title
 * Created by
 * ouyangyi on 17/4/7.
 */


import React, {Component}from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import TitleBar from '../view/titleBar';
import * as Dimens from  '../value/dimens';
import NativeInterface from '../nativeInterface';

export default class ShowTitlePage extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <TitleBar
                    centerText={'标题+左边按钮'}
                    isShowLeftBackIcon={true}
                    navigator={this.props.navigator}
                />

                <View
                    style={{marginTop:20}}
                />

                <TitleBar
                    centerText={'标题'}
                    isShowLeftBackIcon={false}
                    navigator={this.props.navigator}
                />

                <View
                    style={{marginTop:20}}
                />

                <TitleBar
                    centerText={'标题+右边'}
                    isShowLeftBackIcon={false}
                    navigator={this.props.navigator}
                    rightText = {'右边'}
                    rightPress = {() => {
                        NativeInterface.showToast('点了右边文字');
                    }}
                />

                <View
                    style={{marginTop:20}}
                />

                <TitleBar
                    centerText={'左边+标题+右边'}
                    isShowLeftBackIcon={true}
                    navigator={this.props.navigator}
                    rightText = {'右边文字'}
                    rightPress = {() => {
                        NativeInterface.showToast('点了右边文字');
                    }}
                />

            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Dimens.color_bg_f2,
    },

});