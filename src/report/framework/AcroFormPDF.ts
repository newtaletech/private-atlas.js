/**
 * NewTale © 2024
 */

import { LogData } from "dto/LogData";
import { IH_ReportVersion } from "interface/IH_ReportVersion";
import { IH_System } from "system/IH_System";

/***
 * Comentário feito por VitorRT:
 * 
 * Você vai mexer aqui também, usei essa estrutura de exemplo, vc só precisa modificar para a lib
 * que estiver usando, n esquece de mudar a tipagem de any para o objeto da lib.
 * 
 * Por favor remover este comentário depois de concluir a tarefa! <3
 */
export abstract class AcroFormPDF {
    public static addParametersOnReportInV01p00(pdfDoc: any, ld: LogData) {
        const form = pdfDoc.getForm();

		/**
		 * Tab - Resumo Atlas
		 * */
        form.getTextField('at_plataforma').setText('JS/TS');
        form.getTextField('at_versao').setText(IH_System.getM_AtlasVer());
        form.getTextField('at_nome_biblioteca').setText(IH_System.getM_LibName());  
        form.getTextField('at_report_versao').setText(IH_ReportVersion.RelV1p0.toString()); 
        
        /**
		 * Tab - Mensagem De Erro
		 * */
        form.getTextField('at_log_msg').setText(ld.getLogErrStackTraceInString());

        /**
		 * Tab - Informações Sobre O Log De Erro
		 * */
        form.getTextField('at_log_id').setText(ld.getM_logErrID());
        form.getTextField('at_log_dt_emissao').setText(ld.getLogErrDtInString());
        form.getTextField('at_log_hr_emissao').setText(ld.getLogErrTmInString());
        form.getTextField('at_method_called').setText(ld.getM_logErrCallMethod());

        /**
		 * Tab - Stack Trace
		 * */
        form.getTextField('at_log_full_target').setText(ld.getM_logErrTarget());
        form.getTextField('at_log_trace').setText(ld.getLogErrStackTraceInString());

        /**
		 * Rodapé
		 * */
        form.getTextField('report_dt_emissao').setText(new Date().toString());
    }   
}