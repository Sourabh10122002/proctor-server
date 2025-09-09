import { Document } from "mongoose";

export interface ILogEvent extends Document {
    type: string;
    atMs: number;
    durationMs?: number;
    confidence?: number;
    meta?: Record<string, unknown>;
    sessionId: string;
    candidateName: string;
}

export interface ISessionReport {
    candidateName: string;
    interviewDuration: number;
    focusLostCount: number;
    absenceCount: number;
    multiFaceCount: number;
    phoneDetectedCount: number;
    notesDetectedCount: number;
    extraDeviceCount: number;
    integrityScore: number;
    events: ILogEvent[];
}

export interface ISession extends Document {
    sessionId: string;
    candidateName: string;
    startTime: Date;
    endTime: Date;
    duration: number;
    integrityScore: number;
    report: ISessionReport;
    createdAt: Date;
}