package com.studyproject.module;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 调用原生本地的一些方法
 * Created by
 * ouyangyi on 17/3/28.
 */
public class CustomNativeModule extends ReactContextBaseJavaModule {

    public static Callback successBack;
    public static Callback errorBack;

    public CustomNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomNativeModule";
    }

    /**
     * 在外部调用成功返回
     *
     * @param args 返回参数
     */
    public static void takeSuccessBack(Object... args) {
        if (successBack != null) {
            successBack.invoke(args);
        }
    }

    /**
     * 在外部调用失败返回
     *
     * @param args 返回参数
     */
    public static void takeErrorBack(Object... args) {
        if (errorBack != null) {
            errorBack.invoke(args);
        }
    }

    /**
     * 显示toast
     *
     * @param content 显示的内容
     */
    @ReactMethod
    public void showToast(String content) {
        Toast.makeText(getReactApplicationContext(), content, Toast.LENGTH_SHORT).show();
    }

    /**
     * 获取应用版本好
     *
     * @param successBack 成功回调
     * @param errorBack   失败回调
     */
    @ReactMethod
    public void getAppVersion(Callback successBack, Callback errorBack) {
        this.successBack = successBack;
        this.errorBack = errorBack;
        takeSuccessBack("传版本号RN展示: V1.0.0");
    }
}
