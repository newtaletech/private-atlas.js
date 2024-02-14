import IAtlasAllConfig from "./interface/IAtlasAllConfig";
import AtlasFactory from "./factory/AtlasFactory";

class Atlas {
    static enableConsole: boolean = false;
    static enableDebug: boolean = false;

    static logConfig(config: IAtlasAllConfig): void {
      Atlas.enableConsole = config.enableConsole!;
      Atlas.enableDebug = config.enableDebug!;
    }

    logInfo(message: string): void {
      AtlasFactory.logFactory(message, 1);
    }

    logDebug(message: string): void {
      AtlasFactory.logFactory(message, 2);
    }

    logWarning(message: string): void {
      AtlasFactory.logFactory(message, 3);
    }

    logError(message: string): void {
      AtlasFactory.logFactory(message, 4);
    }
}

export default Atlas;
