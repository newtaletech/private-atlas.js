/**
 * NewTale © 2024
 */

import { LogData } from "dto/LogData";
import { ReportData } from "dto/ReportData";
import { IH_Report } from "./IH_Report";

export abstract class Report {
    constructor() {

    } 

    public abstract geraPDF( ld: LogData ): Promise<ReportData>;

    protected addParameters(pdfDoc: any, ld: LogData): void {
        IH_Report.addParametersOnReport(pdfDoc, ld);
    }
}