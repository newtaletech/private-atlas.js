/**
 * NewTale © 2024
 */

interface StackTraceElement {
    fileName: string;
    lineNumber: number;
    columnNumber: number;
    methodName: string;
    className: string;
    nativeMethod: boolean;
    functionName: string;
    typeName: string;
    isEval: boolean;
}

export class LogData {
    private m_logErrID: string | undefined;
    private m_logErrMsg: string | undefined;
    private m_logErrTtl: string | undefined;
    private m_logErrTrace: StackTraceElement[] | undefined;
    private m_logErrDt: Date | undefined;
    private m_logErrTm: Date | undefined;
    private m_logErrTarget: string | undefined;
    private m_logErrCallMethod: string | undefined;
    private m_logErrThrowable: Error | undefined;
  
    constructor() {}
  
    public getM_logErrID(): string | undefined {
      return this.m_logErrID;
    }
  
    public setM_logErrID(m_logErrID: string | undefined) {
      this.m_logErrID = m_logErrID;
    }
  
    public getLogErrMsg(): string | undefined {
      return this.m_logErrMsg;
    }
  
    public setLogErrMsg(m_logErrMsg: string | undefined) {
      this.m_logErrMsg = m_logErrMsg;
    }
  
    public getLogErrTrace(): StackTraceElement[] | undefined {
      return this.m_logErrTrace;
    }
  
    public setLogErrTrace(m_logErrTrace: StackTraceElement[] | undefined) {
      this.m_logErrTrace = m_logErrTrace;
    }
  
    public getLogErrDt(): Date | undefined {
      return this.m_logErrDt;
    }
  
    public setLogErrDt(m_logErrDt: Date | undefined) {
      this.m_logErrDt = m_logErrDt;
    }
  
    public getLogErrTm(): Date | undefined {
      return this.m_logErrTm;
    }
  
    public setLogErrTm(m_logErrTm: Date | undefined) {
      this.m_logErrTm = m_logErrTm;
    }
  
    public getM_logErrTtl(): string | undefined {
      return this.m_logErrTtl;
    }
  
    public setM_logErrTtl(m_logErrTtl: string | undefined) {
      this.m_logErrTtl = m_logErrTtl;
    }
  
    public getM_logErrTarget(): string | undefined {
      return this.m_logErrTarget;
    }
  
    public setM_logErrTarget(m_logErrTarget: string | undefined) {
      this.m_logErrTarget = m_logErrTarget;
    }
  
    public getM_logErrCallMethod(): string | undefined {
      return this.m_logErrCallMethod;
    }
  
    public setM_logErrCallMethod(m_logErrCallMethod: string | undefined) {
      this.m_logErrCallMethod = m_logErrCallMethod;
    }
  
    public getM_logErrThrowable(): Error | undefined {
      return this.m_logErrThrowable;
    }
  
    public setM_logErrThrowable(m_logErrThrowable: Error | undefined) {
      this.m_logErrThrowable = m_logErrThrowable;
    }
  
    public getLogErrTimestamp(): string {
      const dtString = this.getLogErrDtInString();
      const tmString = this.getLogErrTmInString();
      return `${dtString} ${tmString}`;
    }
  
    public getLogErrDtInString(): string {
      if (!this.m_logErrDt) {
        return "";
      }
  
      const dt = new Date(this.m_logErrDt);
      const day = dt.getDate().toString().padStart(2, "0");
      const month = (dt.getMonth() + 1).toString().padStart(2, "0");
      const year = dt.getFullYear();
      return `${day}/${month}/${year}`;
    }
  
    public getLogErrTmInString(): string {
      if (!this.m_logErrTm) {
        return "";
      }
  
      const tm = new Date(this.m_logErrTm);
      const hours = tm.getHours().toString().padStart(2, "0");
      const minutes = tm.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    }

    public getLogErrStackTraceInString(): string | undefined {
        if (!this.m_logErrThrowable) {
          return undefined;
        }  
        return this.m_logErrThrowable.stack;
      }
}  