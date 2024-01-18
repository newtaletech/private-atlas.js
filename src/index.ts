import Atlas from './atlas';

class Index {
    public static run(): void {
        const atlas = new Atlas();

        Atlas.logConfig({
            enableConsole: false,
            enableDebug: true,
        });

        atlas.logInfo("Ocklay é o que nois porta");
        atlas.logDebug("Bebida rosa");
        atlas.logWarning("Cuidado ela está ficando sensual");
        atlas.logError("Putts ela tá sensual");
    }
}

Index.run();
