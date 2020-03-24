import { WebPlugin } from "@capacitor/core";
import { NativeToolboxPlugin } from "./definitions";

export class NativeToolboxWeb extends WebPlugin implements NativeToolboxPlugin {
  constructor() {
    super({
      name: "NativeToolbox",
      platforms: ["web"]
    });
  }

  async openNativeAppSettings() {}
}

const NativeToolbox = new NativeToolboxWeb();

export { NativeToolbox };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(NativeToolbox);
