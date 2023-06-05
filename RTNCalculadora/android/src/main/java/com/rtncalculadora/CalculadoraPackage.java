package com.rtncalculadora;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.TurboReactPackage;
import java.util.HashMap;
import java.util.Map;

import java.util.Collections;
import java.util.List;

public class CalculadoraPackage extends TurboReactPackage {

  @Nullable
  @Override
  public NativeModule getModule(String name, ReactApplicationContext reactContext) {
      if (name.equals(CalculadoraModule.NAME)) {
        return new CalculadoraModule(reactContext);
      } else {
        return null;
      }
  }

  @Override
  public ReactModuleInfoProvider getReactModuleInfoProvider() {
    return () -> {
      final Map<String, ReactModuleInfo> moduleInfos = new HashMap<>();
      moduleInfos.put(
        CalculadoraModule.NAME,
        new ReactModuleInfo(
          CalculadoraModule.NAME,
          CalculadoraModule.NAME,
          false, // canOverrideExistingModule
          false, // needsEagerInit
          true, // hasConstants
          false, // isCxxModule
          true // isTurboModule
        )
      );
      return moduleInfos;
    };
  }
}