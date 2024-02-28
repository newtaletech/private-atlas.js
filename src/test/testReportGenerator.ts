/**
 * NewTale © 2024
 */

import { LogData } from "dto/LogData";
import { ReportGenerator } from "../report/framework/ReportGenerator";
import { writeFileSync } from 'fs';
import Atlas from "../atlas";
import * as path from 'path'


class Index {
    public static run(): void {
        const atlas = new Atlas(path.resolve(__filename));
        // testar...

        // depois de você alterar a classe de factory coloque o atlas.logError() dentro do 
        // método 'generatePDF' e teste!
        ReportGenerator.generatePDF(atlas.logError("Erro ao acessar ao back-end HTTP 500", new Error()))
        .then(bytes => {
            if(!bytes) return
            console.log(`Bytes do relatório PDF: ${bytes}`)
            console.log(`[Teste Local] - Salvando arquivo na raiz do projeto...`);
            Index.save(bytes);
        })
        .catch(err => {
            console.error(`Não foi possível montar o arquivo pdf para teste.`)
            console.error(`Informações do erro: ${err}`);
        });
    }

    private static save(bytes: Uint8Array | undefined): void {
        if (!bytes) return;
        const pdfContent = Buffer.from(bytes);
        writeFileSync('relatorio-teste.pdf', pdfContent);
        console.log(`[Teste Local] - Arquivo salvo com sucesso!`);
    }
}

Index.run();