import IAtlasAllConfig from "./interface/IAtlasAllConfig";
import AtlasFactory from "./factory/AtlasFactory";
import { LogsEnum } from "./models/enum/LogsEnum";

class Atlas {
    static enableConsole: boolean = false;
    static enableDebug: boolean = false;
    static className: string;

    constructor(paramPath: string){
      Atlas.className = paramPath;
    }

    static logConfig(config: IAtlasAllConfig): void {
      Atlas.enableConsole = config.enableConsole!;
      Atlas.enableDebug = config.enableDebug!;
    }

    logInfo(message: string): void {
      AtlasFactory.logFactory(message, LogsEnum.Info, Atlas.className);
    }

    logDebug(message: string): void {
      AtlasFactory.logFactory(message, LogsEnum.Debug, Atlas.className);
    }

    logWarning(message: string): void {
      AtlasFactory.logFactory(message, LogsEnum.Warning, Atlas.className);
    }

    logError(message: string): void {
      AtlasFactory.logFactory(message, 4, Atlas.className);
    }
}

export default Atlas;
