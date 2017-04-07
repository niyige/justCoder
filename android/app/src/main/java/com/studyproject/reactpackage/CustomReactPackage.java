package com.studyproject.reactpackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.studyproject.manage.TextViewManager;
import com.studyproject.module.CustomNativeModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by
 * ouyangyi on 17/3/28.
 */
public class CustomReactPackage implements ReactPackage {

    /**
     * 封装的原生模块放在createNativeModules
     * @param reactContext
     * @return
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new CustomNativeModule(reactContext));
        return modules;
    }


    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    /**
     *封装的原生UI组件放在createViewManagers里
     * @param reactContext
     * @return
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> managers = new ArrayList<>();
        managers.add(new TextViewManager());
        return managers;
    }
}
