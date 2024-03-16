import IAtlasAllConfig from "./interface/IAtlasAllConfig";
import AtlasFactory from "./factory/AtlasFactory";
import { LogsEnum } from "./models/enum/LogsEnum";
import { LogData } from "./dto/LogData";

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
      if(Atlas.enableConsole)
        AtlasFactory.logFactory(message, LogsEnum.Info, Atlas.className);
    }

    logDebug(message: string): void {
      if(Atlas.enableConsole && Atlas.enableDebug)
        AtlasFactory.logFactory(message, LogsEnum.Debug, Atlas.className);
    }

    logWarning(message: string): void {
      if(Atlas.enableConsole)
        AtlasFactory.logFactory(message, LogsEnum.Warning, Atlas.className);
    }

    logError(message: string, erro: Error): LogData {
      if(Atlas.enableConsole)
        return AtlasFactory.logErrorFactory(message, Atlas.className, erro);
      return new LogData();
    }
}

export default Atlas;
