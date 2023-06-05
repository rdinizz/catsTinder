package com.rtncalculadora;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.rtncalculadora.NativeCalculadoraSpec;

public class CalculadoraModule extends NativeCalculadoraSpec {

    public static String NAME = "RTNCalculadora";

    CalculadoraModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public void add(double a, double b, Promise promise) {
        promise.resolve(a + b);
    }

    @Override
    public void subtract(double a, double b, Promise promise) {
        promise.resolve(a - b);
    }

    @Override
    public void multiply(double a, double b, Promise promise) {
        promise.resolve(a * b);
    }

    @Override
    public void divide(double a, double b, Promise promise) {
        promise.resolve(a / b);
    }
}