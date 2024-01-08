import IAtlasFactory from "interface/IAtlasFactory";

class AtlasFactory implements IAtlasFactory{
    logInfoFactory(mensage: string): void {
        console.log("%cINFO: "+mensage, "color: #FFFFFF");
    }
    logDebugFactory(mensage: string): void {
        console.log("%cDEBUG: "+mensage, "color: #0085b9");
    }
    logWarningFactory(mensage: string): void {
        console.log("%cWARN: "+mensage, "color: #FFB200");
    }
    logErrorFactory(mensage: string): void {
        console.log("%cERROR: "+mensage, "color: #ff0000");
    }
}

export default AtlasFactory;