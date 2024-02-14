/**
 * NewTale © 2024
 */

export class IH_System {
	protected static m_atlasVer: string = "01.00";
    protected static m_libName: string = "atlas.js"
	
	public static getM_AtlasVer( ): string
	{
		return IH_System.m_atlasVer;
	}

    	
	public static getM_LibName( ): string
	{
		return IH_System.m_libName;
	}
}