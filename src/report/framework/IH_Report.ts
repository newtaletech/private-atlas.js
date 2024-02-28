/**
 * NewTale © 2024
 */

import { LogData } from "../../dto/LogData";
import { ReportData } from "../../dto/ReportData";
import { IH_ReportVersion } from "../../interface/IH_ReportVersion";
import { ReportType } from "../../interface/ReportType";
import { RepV1p0 } from "../RepV1p0";
import { Report } from "./Report";
import { AcroFormPDF } from "./AcroFormPDF";

/**
 * <p>Classe <code>IH_Report</code>.</p> 
 */
export class IH_Report {
    protected static S_REL_DEFAULT_VER: IH_ReportVersion = IH_ReportVersion.RelV1p0;

    public static getReportVer() : IH_ReportVersion {
        return IH_Report.S_REL_DEFAULT_VER;
    }

    public static generateReport( type: ReportType, ld: LogData ): Promise<ReportData> {
        let repData: Promise<ReportData>;
        let rep: Report = IH_Report.makeReport();
        switch (type) {
            case ReportType.PDF: {
                repData = rep.geraPDF(ld);
                break;
            }

            default: {
                repData = rep.geraPDF(ld);
                break;
            }
               
        }
        return repData;
    }

    public static addParametersOnReport(pdfDoc: any, ld: LogData): void {
        switch (IH_Report.S_REL_DEFAULT_VER) {
			case IH_ReportVersion.RelV1p0: {
				AcroFormPDF.addParametersOnReportInV01p00( pdfDoc, ld );
				break;
			}
			default: {
				AcroFormPDF.addParametersOnReportInV01p00( pdfDoc, ld );
				break;
			}
		}
    }

    private static makeReport(): Report {
        let rep: Report;
        switch(IH_Report.S_REL_DEFAULT_VER) {
            case IH_ReportVersion.RelV1p0: {
                rep = new RepV1p0();
            }
            default: {
                rep = new RepV1p0();
            }
        }

        return rep;
    }

}