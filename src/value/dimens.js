
import {
    PixelRatio,
    Dimensions,
    Platform,
} from 'react-native';

const {height, width} = Dimensions.get('window'); //设置view占满屏幕宽度

//分割线高度
export const ruleSize = 1 / PixelRatio.get();

//屏幕高度
export const screen_height = height;
//屏幕宽度
export const screen_width = width;
//是不是安卓设备
export const isAndroid = (Platform.OS === 'android');
//是不是ios设备
export const isIOS = (Platform.OS === 'ios');
//IOS界面距离屏幕顶部特殊处理
export const viewIOSMarginTop = isIOS ? 20 : 0;

/**全局用色*/
//导航栏、工具栏使用
export const color_bg_f9 = '#f9f9f9';
//页签使用
export const color_bg_f6 = '#f6f6f6';
//底层背景色用
export const color_bg_f2 = '#f2f2f2';

/**分隔线用色*/
//使用频率最高
export const color_line_cc = '#cccccc';

/**文字颜色*/
//黑色——主标题、主题内容
export const color_text_33 = '#333333';
export const color_text_99 = '#999999';

/**文字大小*/
//重要的内容文字／标题
export const textSize_15 = 15;


/**cell 按钮 高度*/
export const height_44 = 44;



