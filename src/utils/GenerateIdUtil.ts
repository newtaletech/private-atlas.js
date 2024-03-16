/**
 * NewTale © 2024
 */

export default class GenerateIdUtil{
    static generateRandomLogId(): string {
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
}