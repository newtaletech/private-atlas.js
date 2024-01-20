import DateFactory from "./DateFactory";
import * as path from 'path';

class AtlasFactory {
   static dateNow: string = `[\x1b[34m ${DateFactory.formatDate(new Date())} \x1b[0m]`;


   static logFactory(message: string, num: number): void {
        switch(num) { 
            case 1: { 
               console.log(`${AtlasFactory.dateNow} ${path.resolve(__filename)} @INFO: ${message}`); 
               break; 
            } 
            case 2: { 
               console.log(`${AtlasFactory.dateNow} ${path.resolve(__filename)} @\x1b[34mDEBUG\x1b[0m: ${message}`);
               break; 
            } 
            case 3: { 
               console.log(`${AtlasFactory.dateNow} ${path.resolve(__filename)} @\x1b[33mWARN\x1b[0m: ${message}`); 
               break; 
            }
            case 4: {
               console.log(`${AtlasFactory.dateNow} ${path.resolve(__filename)} @\x1b[31mERROR\x1b[0m: ${message}`);
            }
         } 
    }
}

export default AtlasFactory;
