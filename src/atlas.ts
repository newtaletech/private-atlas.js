import IAtlas from "interface/IAtlas";
import IAtlasAllConfig from "./interface/IAtlasAllConfig";
import IAtlasFactory from "interface/IAtlasFactory";

class Atlas implements IAtlas {
    static enableConsole: boolean = true;
    static enableDebug: boolean = true;
    private _atlasFactory: IAtlasFactory;

    constructor(atlasFactory: IAtlasFactory){
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
