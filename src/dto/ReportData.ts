/**
 * NewTale © 2024
 */

import { IH_ReportVersion } from "interface/IH_ReportVersion";
import { LogData } from "./LogData";
import { PDFDocument } from 'pdf-lib';

export class ReportData {
    private m_relNome: string | undefined;
    private m_relLogData: LogData | undefined;
    private m_relFileBytes: Uint8Array | undefined;

    constructor() {}
  
    public getM_relNome(): string | undefined {
      return this.m_relNome;
    }
  
    public setM_relNome(m_relNome: string | undefined) {
      this.m_relNome = m_relNome;
    }
  
    public getM_relLogData(): LogData | undefined {
      return this.m_relLogData;
    }
  
    public setM_relLogData(m_relLogData: LogData | undefined) {
      this.m_relLogData = m_relLogData;
    }
  
    public getM_relFileBytes(): Uint8Array | undefined {
      return this.m_relFileBytes;
    }
  
    public setM_relFile(m_relFileBytes: Uint8Array | undefined) {
      this.m_relFileBytes = m_relFileBytes;
    }
  }