/**
 * 原生的TextView
 * Created by
 * ouyangyi on 16/4/5.
 *
 * <SimpleTextView
       style={{width:300, height:300}}
       text={'我是原生的,你怕不怕'}
       textSize={15}
       textColor = {'black'}
      />
 */
import React, {PropTypes}from 'react';
import {
    requireNativeComponent,
    View
} from 'react-native';

var myTextView = {
    name: 'SimpleTextView',
    propTypes: {
        text: PropTypes.string,
        textSize: PropTypes.number,
        textColor: PropTypes.string,
        textGravity:PropTypes.string,
        ...View.propTypes //包含默认的View的属性,不加这句,那些默认的属性要一一加进来,否则报错
    }
};
module.exports = requireNativeComponent('SimpleTextView', myTextView);