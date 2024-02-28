import Atlas from './atlas';
import * as path from 'path'

class Index {
    public static run(): void {
        const atlas = new Atlas(path.resolve(__filename));

        Atlas.logConfig({
            enableConsole: true,
            enableDebug: true,
        });

        atlas.logDebug("Bebida rosa");
        atlas.logInfo("Ocklay é o que nois porta");
        atlas.logWarning("Cuidado ela está ficando");
        atlas.logError("Putts ela tá sensual", new Error);
    }
}

Index.run();