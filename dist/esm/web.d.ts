import { WebPlugin } from "@capacitor/core";
import { NativeToolboxPlugin } from "./definitions";
export declare class NativeToolboxWeb extends WebPlugin implements NativeToolboxPlugin {
    constructor();
    openNativeAppSettings(): Promise<void>;
}
declare const NativeToolbox: NativeToolboxWeb;
export { NativeToolbox };
