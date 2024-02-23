/**
 * NewTale © 2024
 */

import DateFactory from "./DateFactory";
import GenerateIdUtil from "../utils/GenerateIdUtil";
import GetNameFunctionUtil from "../utils/GetNameFunctionUtil";
import Cor from "../models/CorConsoleModel";
import { LogsEnum } from "../models/enum/LogsEnum";

class AtlasFactory {

   static logFactory(message: string, num: number, path: string): void {
      const dateNow: string = `${Cor.blue}${DateFactory.formatDate(new Date())}${Cor.break}`;
      switch(num) { 
         case LogsEnum.Info: { 
            console.log(`[${dateNow}] ${path} [${GetNameFunctionUtil.getCallingMethodName()}] @INFO: ${message}`); 
            break; 
         } 
         case LogsEnum.Debug: { 
            console.log(`\t[${dateNow}] ${path}#${Cor.backgroundYellow}${Cor.black}${GetNameFunctionUtil.getCallingMethodName()}${Cor.break} [${GenerateIdUtil.generateRandomLogId()}] @${Cor.blue}DEBUG${Cor.break}: ${message}`);
            break; 
         } 
         case LogsEnum.Warning: { 
            console.log(`[${dateNow}] ${path} [${GenerateIdUtil.generateRandomLogId()}] @${Cor.yellow}WARN${Cor.break}: ${message}`); 
            break; 
         }
         case 4: {
            console.log(`[${dateNow}] ${path} [${GenerateIdUtil.generateRandomLogId()}] @${Cor.red}ERROR${Cor.break}: ${message}`);
         }
      } 
   }

}

export default AtlasFactory;
