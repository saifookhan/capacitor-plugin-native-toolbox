import { Plugins } from "@capacitor/core";
const { NativeToolbox } = Plugins;
export function openNativeAppSettings() {
    try {
        NativeToolbox.openNativeAppSettings();
    }
    catch (error) {
        console.error("🚨 An error occurred while trying to open the native app settings.");
        console.error(error);
    }
}
//# sourceMappingURL=plugin.js.map