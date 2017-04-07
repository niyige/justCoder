import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';

import WelcomePage from './welcomePage';

class NavigatorLaunch extends Component {
    render() {
        let defaultName = "WelcomePage";
        let defaultComponent = WelcomePage;
        return (
            <Navigator
                //初始化路由
                initialRoute={{
                    name: defaultName,
                    component: defaultComponent
                }}

                //设置入场动画
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FadeAndroid
                } }
                //渲染场景,读取initialRoute
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}

            />
        )
    }
}


AppRegistry.registerComponent('StudyProject', ()=>NavigatorLaunch);

