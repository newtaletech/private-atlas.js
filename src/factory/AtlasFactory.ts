/**
 * NewTale © 2024
 */

import DateFactory from "./DateFactory";
import GenerateIdUtil from "../utils/GenerateIdUtil";
import GetNameFunctionUtil from "../utils/GetNameFunctionUtil";
import Cor from "../models/CorConsoleModel";
import { LogsEnum } from "../models/enum/LogsEnum";
import { LogData } from "../dto/LogData";

class AtlasFactory {

   static logFactory(message: string, num: number, path: string, error?: Error): void {
      const date = new Date();
      const dateNow: string = `${Cor.blue}${DateFactory.formatDate(date)}${Cor.reset}`;
      switch(num) { 
         case LogsEnum.Info: { 
            console.log(`[${dateNow}] ${path} [${GenerateIdUtil.generateRandomLogId()}] @INFO: ${message}`); 
            break; 
         } 
         case LogsEnum.Debug: { 
            console.log(`\t[${dateNow}] ${path}#${Cor.backgroundYellow}${Cor.black}${GetNameFunctionUtil.getCallingMethodName()}${Cor.reset} [${GenerateIdUtil.generateRandomLogId()}] @${Cor.blue}DEBUG${Cor.reset}: ${message}`);
            break; 
         } 
         case LogsEnum.Warning: { 
            console.log(`[${dateNow}] ${path} [${GenerateIdUtil.generateRandomLogId()}] @${Cor.yellow}WARN${Cor.reset}: ${message}`); 
            break; 
         }
      }
   }

   static logErrorFactory(message: string, path: string, error?: Error) {
      const date = new Date();
      const dateNow: string = `${Cor.blue}${DateFactory.formatDate(date)}${Cor.reset}`;
      const id = GenerateIdUtil.generateRandomLogId();
      console.log(`[${dateNow}] ${path} [${id}] @${Cor.red}ERROR${Cor.reset}: ${message}`);
      console.error(error?.stack)
      const ld = new LogData();
      ld.setLogErrDt(date);
      ld.setM_logErrID(id);
      ld.setLogErrMsg(message);
      ld.setLogErrTm(date);
      ld.setM_logErrThrowable(error);
      ld.setM_logErrCallMethod(GetNameFunctionUtil.getCallingMethodName());
      ld.setM_logErrTarget(path);
      
      return ld;
   }
}

export default AtlasFactory;
