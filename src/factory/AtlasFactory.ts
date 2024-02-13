import DateFactory from "./DateFactory";

class AtlasFactory {
   static dateNow: string = `[\x1b[34m ${DateFactory.formatDate(new Date())} \x1b[0m]`;

   private static getCallingMethodName(): string | null {
      try {
          throw new Error();
      } catch (e: any) {
          const stacks = e?.stack?.split('\n');
          if (stacks && stacks.length >= 3) {
              const callerInfo = stacks[4].trim();
              const regex: RegExp = /at\s+(.+?)\s+\(/;
              const match = callerInfo.match(regex);
              if (match && match.length > 1) {
                  let methodName: string = match[1];
                  if (methodName.includes("Function.")){
                     let indice: number = methodName.indexOf("Function.");
                     let inicio: string = methodName.substring(0, indice);
                     let fim: string = methodName.substring(indice + "Function.".length);
                     return (inicio + fim).trim() + "()";
                  }

                  return methodName;
              }
          }
      }
      return null;
  }

  private static generateRandomLogId(): string {
   const randomNumber1: number = Math.floor(Math.random() * (20 - 10) + 10);
   const randomChar1: string = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

   const randomNumber2: number = Math.floor(Math.random() * (20 - 10) + 10);
   const randomChar2: string = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

   const randomNumber3: number = Math.floor(Math.random() * (20 - 10) + 10);
   const randomChar3: string = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

   const randomNumber4: number = Math.floor(Math.random() * (20 - 10) + 10);
   const randomChar4: string = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

   const id: string = "atId-" +
       randomNumber1 + randomChar1 +
       randomNumber2 + randomChar2 +
       randomNumber3 + randomChar3 +
       randomNumber4 + randomChar4;

   return id;
}

   static logFactory(message: string, num: number, path: string): void {
        switch(num) { 
            case 1: { 
               console.log(`${AtlasFactory.dateNow} ${path} [${AtlasFactory.generateRandomLogId()}] @INFO: ${message}`); 
               break; 
            } 
            case 2: { 
               console.log(`\t${AtlasFactory.dateNow} ${path}#\u001B[30m\u001B[43m${AtlasFactory.getCallingMethodName()}\x1b[0m [${AtlasFactory.generateRandomLogId()}] @\x1b[34mDEBUG\x1b[0m: ${message}`);
               break; 
            } 
            case 3: { 
               console.log(`${AtlasFactory.dateNow} ${path} [${AtlasFactory.generateRandomLogId()}] @\x1b[33mWARN\x1b[0m: ${message}`); 
               break; 
            }
            case 4: {
               console.log(`${AtlasFactory.dateNow} ${path} [${AtlasFactory.generateRandomLogId()}] @\x1b[31mERROR\x1b[0m: ${message}`);
            }
         } 
    }
}

export default AtlasFactory;
