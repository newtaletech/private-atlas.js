import Atlas from './atlas';
import AtlasFactory from 'factory/AtlasFactory';

class Index{
    public static run(): void {
        const atlasFactory = new AtlasFactory();
        const atlas = new Atlas(atlasFactory);

        Atlas.logConfig({
          enableConsole: true,
          enableDebug: true,
        });
    
        atlas.logInfo("Ocklay é o que nois porta");
        atlas.logDebug("Bebida rosa");
        atlas.logWarning("Cuidado ela está ficando sensual");
        atlas.logError("Putts ela tá sensual");
    }
}

Index.run;