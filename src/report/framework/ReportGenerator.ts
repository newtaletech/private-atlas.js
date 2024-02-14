/**
 * NewTale © 2024
 */

import { ReportData } from "dto/ReportData";
import { IH_Report } from "./IH_Report";
import { LogData } from "dto/LogData";
import { ReportType } from "interface/ReportType";

export abstract class ReportGenerator {
    public static async generatePDF(ld: LogData): Promise<Uint8Array | undefined> {
        return (await IH_Report.generateReport(ReportType.PDF,ld)).getM_relFileBytes();
    }
}