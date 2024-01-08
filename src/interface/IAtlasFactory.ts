interface IAtlasFactory{
    logInfoFactory(mensage: string): void;
    logDebugFactory(mensage: string): void;
    logWarningFactory(mensage: string): void;
    logErrorFactory(mensage: string): void;
}

export default IAtlasFactory;