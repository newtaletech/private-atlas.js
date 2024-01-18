class AtlasFactory {
    static logFactory(message: string, num: number): void {
        switch(num) { 
            case 1: { 
               console.log("@INFO" + `: ${message}`); 
               break; 
            } 
            case 2: { 
               console.log("\x1b[34m" + "@DEBUG" + "\x1b[0m" + `: ${message}`);
               break; 
            } 
            case 3: { 
               console.log("\x1b[33m" + "@WARN" + "\x1b[0m" + `: ${message}`); 
               break; 
            }
            case 4: {
               console.log("\x1b[31m" + "@ERROR" + "\x1b[0m" + `: ${message}`);
            }
         } 
    }
}

export default AtlasFactory;
