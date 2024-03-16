/**
 * NewTale © 2024
 */

import { LogData } from "../dto/LogData";
import { ReportData } from "../dto/ReportData";
import { Report } from "./framework/Report";
import { PDFDocument } from 'pdf-lib';
import * as path from 'path'
import * as fs from 'fs/promises';


export class RepV1p0 extends Report {
    public async geraPDF(ld: LogData): Promise<ReportData> {
        let repData: ReportData = new ReportData()
        const rootPath = path.resolve(__dirname);
        const templatePath = `${rootPath}/template/atlas-error-report-v01p01-template.pdf`;
        const templateBytes = await fs.readFile(templatePath);
        const pdfDoc = await PDFDocument.load(templateBytes);
        this.addParameters(pdfDoc, ld);
        const pdfBytes = await pdfDoc.save();
        repData.setM_relFile(pdfBytes);
        
      return repData;
    }

}
