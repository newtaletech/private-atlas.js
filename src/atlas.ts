import IAtlasAllConfig from "./interface/IAtlasAllConfig";
import AtlasFactory from "factory/AtlasFactory";

class Atlas{
    static enableConsole: boolean = false;
    static enableDebug: boolean = false;
    private _atlasFactory: AtlasFactory;

    constructor(atlasFactory: AtlasFactory){
      this._atlasFactory = atlasFactory;
    }

    static logConfig(config: IAtlasAllConfig): void {
      Atlas.enableConsole = config.enableConsole!;
      Atlas.enableDebug = config.enableDebug!;
    }

    logInfo(mensage: string): void {
      if(Atlas.enableConsole!){
        this._atlasFactory.logInfoFactory(mensage);
      }
    }
    logDebug(mensage: string): void {
      if(Atlas.enableConsole! && Atlas.enableDebug!){
        this._atlasFactory.logDebugFactory(mensage);
      }
    }
    logWarning(mensage: string): void {
      if(Atlas.enableConsole!){
        this._atlasFactory.logWarningFactory(mensage);
      }
    }
    logError(mensage: string): void {
      if(Atlas.enableConsole!){
        this._atlasFactory.logErrorFactory(mensage);
      }
    }
  }

export default Atlas;
