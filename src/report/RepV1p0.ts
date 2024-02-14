/**
 * NewTale © 2024
 */

import { LogData } from "dto/LogData";
import { ReportData } from "dto/ReportData";
import { Report } from "./framework/Report";
import doc from "pdfkit";
import { endAcroForm } from "pdfkit";
import fs from 'fs';


export class RepV1p0 extends Report {

    /***
     * Comentário feito por VitorRT:
     * 
     * A classe LogData nada mais é do que um DTO que irá transportar os dados do log.
     * Você vai ter que mexer na estrutura do seu AtlasFactory no método de logError.
     * Nesse método além de você dar o console.log você precisa criar um objeto LogData
     * com todas as informações do log, e depois retornar isso. Ou seja, o seu método
     * logError vai deixar de ser um void e vai retornar um LogData.
     * 
     * 
     * "Ah vitor pq?"
     * 
     * Para você passar os dados do log para o gerador de relatório APÓS ter printado
     * o log no console. Ficaria algo assim:
     * 
     * ```ts
     * atlas.logInfo("Teste") // esse cara não retorna nada (void), botei só de exemplo
     * atlas.logError("Mensagem de erro", err) // esse cara retorna um LogData com os dados do log
     * 
     * // Ai você teria duas formas de gerar o relatório.
     * 
     * // 1 Forma
     * const file: Uint8Array = ReportGenerator.generatePDF(atlas.logError("Mensagem de erro", err));
     * 
     * // 2 Forma (Mesmo resultado, porém de outro jeito)
     * const logErr: LogData = atlas.logError("Mensagem de erro", err);
     * const file: Uint8Array = ReportGenerator.generatePDF(logErr);
     * ```
     * 
     * Vantagens disso tudo: 
     *  - Você tem duas funcionalidades separadas, a classe de logs cuida apenas dos logs, e a classe de geração de relatório cuida dos relatórios
     * - Flexibilidade. Você pode fazer o que você quiser com o arquivo, você não fica limitado apenas a 
     * gerar ele em sua máquina, porque um arquivo nada mais é do que uma grande sequencia de bytes (numeros ou Uint8Array). Se você tem os bytes você tem o arquivo, só montar ele com um montador.
     * 
     * 
     * Obs: Você precisa encontrar uma lib compatível com o typescript de pdf que de suporte para acroForm. Se ficar muito complicado experimente degredir a versão do typescript para a 2.x.x, e usar a lib pdfkit. Se fizer isso use esse comando: 
     * ```sh 
     * npm install pdfkit '@'types/pdfkit
     * ```
     * Desconsidere esse '' dentro do '@', se nao ele vai considerar q eh um js doc
     * 
     * Por favor remover este comentário depois de concluir a tarefa! <3
     */
    public async geraPDF(ld: LogData): Promise<ReportData> {
        let repData: ReportData = new ReportData()
        // path para você carregar o template pdf com os acroFields setados.
        const templatePath = '/report/template/atlas-error-report-v01p01-template.pdf';
        
        // não apaga esse método, é ele quem chama o framework para adicionar os parametros de acordo com respectiva versão corrente do relatório. Apenas substitua o objeto vazio "{}" pelo objeto da lib q vc estiver usando e mantenha o ld, é ele quem carrega os dados do log.
        this.addParameters({}, ld);

        // depois que adicionar os parametros pegue os bytes do pdf e salve no atributo 'm_relFileBytes'
        // da classe ReportData 
        // ex: repData.setM_relFile(pdfBytes)

        // depois de adicionar os bytes do pdf você finalizou por aqui, deixe o resto com o framework!
        return repData;
    }

}