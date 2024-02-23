/**
 * NewTale © 2024
 */

export default class GetNameFunctionUtil{
    static getCallingMethodName(): string | null {
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
}