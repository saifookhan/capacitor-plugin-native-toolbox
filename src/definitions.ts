declare module "@capacitor/core" {
  interface PluginRegistry {
    NativeToolbox: NativeToolboxPlugin;
  }
}

export interface NativeToolboxPlugin {
  openNativeAppSettings(): void;
}
