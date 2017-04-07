package com.studyproject.manage;

import android.graphics.Color;
import android.view.Gravity;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by
 * ouyangyi on 17/4/5.
 */
public class TextViewManager extends SimpleViewManager<TextView> {

    @Override
    public String getName() {
        return "SimpleTextView";
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        TextView textView = new TextView(reactContext);
        return textView;
    }

    @ReactProp(name = "text")
    public void setText(TextView textView, String txt) {
        textView.setText(txt);
    }

    @ReactProp(name = "textSize")
    public void setTextSize(TextView textView, int size) {
        textView.setTextSize(size);
    }

    @ReactProp(name = "textColor", defaultInt = Color.RED)
    public void setTextColor(TextView textView, String color) {
        textView.setTextColor(Color.parseColor(color));
    }

    @ReactProp(name = "textGravity")
    public void textGravity(TextView textView, String gravity) {
        if ("center".equals(gravity)) {
            textView.setGravity(Gravity.CENTER_HORIZONTAL);
        } else {
            // TODO: 17/4/5
        }
        //textView.setTextColor(Color.parseColor(color));
    }

//
//    class CustomTextView extends TextView {
//
//        public CustomTextView(Context context) {
//            super(context);
//        }
//
//
//        public void onReceiveNativeEvent() {
//
//            WritableMap event = Arguments.createMap();
//            event.putString("message", "MyMessage");
//            ReactContext reactContext = (ReactContext) getContext();
//            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                    getId(),
//                    "topChange",
//                    event);
//
//        }
//
//    }


}
