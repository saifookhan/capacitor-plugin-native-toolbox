package com.nativetoolbox.plugin;

import android.content.Intent;
import android.net.Uri;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import static android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS;

@NativePlugin()
public class NativeToolbox extends Plugin {

    @PluginMethod()
    public void openNativeAppSettings(PluginCall call) {
        Intent i = new Intent(ACTION_APPLICATION_DETAILS_SETTINGS,
                Uri.parse("package:" + getContext().getPackageName()));
        i.addCategory(Intent.CATEGORY_DEFAULT);
        i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivityForResult(call, i, 99);
    }
}
