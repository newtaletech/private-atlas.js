import IAtlasAllConfig from "./interface/IAtlasAllConfig";

class Atlas {
    static enableConsole: boolean = true;
    static enableDebug: boolean = true;

    static logConfig(config: IAtlasAllConfig): void {
      Atlas.enableConsole = config.enableConsole!;
      Atlas.enableDebug = config.enableDebug!;
    }
  }

export default Atlas;
