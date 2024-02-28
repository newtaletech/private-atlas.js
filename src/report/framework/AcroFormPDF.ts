/**
 * NewTale © 2024
 */

import { PDFDocument, rgb } from 'pdf-lib';
import { LogData } from '../../dto/LogData';
import { IH_ReportVersion } from '../../interface/IH_ReportVersion';
import { IH_System } from '../../system/IH_System';

export abstract class AcroFormPDF {
  public static async addParametersOnReportInV01p00(pdfDoc: PDFDocument, ld: LogData) {
    const form = pdfDoc.getForm();

    const fieldsData: Record<string, string> | any = {
      at_plataforma: 'JS/TS',
      at_versao: IH_System.getM_AtlasVer(),
      at_nome_biblioteca: IH_System.getM_LibName(),
      at_report_versao: IH_ReportVersion.RelV1p0.toString(),
      at_log_msg: ld.getLogErrStackTraceInString() || '', 
      at_log_id: ld.getM_logErrID() || '', 
      at_log_dt_emissao: ld.getLogErrDtInString(),
      at_log_hr_emissao: ld.getLogErrTmInString(),
      at_method_called: ld.getM_logErrCallMethod(),
      at_log_full_target: ld.getM_logErrTarget(),
      at_log_trace: ld.getLogErrStackTraceInString(),
      report_dt_emissao: new Date().toString(),
    };

    for (const fieldName in fieldsData) {
      const fieldValue = fieldsData[fieldName];
      const textField = form.getTextField(fieldName);
      if (textField) {
        textField.setText(fieldValue);
      }
    }
  }
}
