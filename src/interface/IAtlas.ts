interface IAtlas{
    logInfo(mensage: string): void;
    logDebug(mensage: string): void;
    logWarning(mensage: string): void;
    logError(mensage: string): void;
}

export default IAtlas;