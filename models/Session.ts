import { Schema, model, Model } from "mongoose";
import { ISession, ILogEvent } from "./interfaces";

const logEventSchema = new Schema<ILogEvent>({
  type: { type: String, required: true },
  atMs: { type: Number, required: true },
  durationMs: Number,
  confidence: Number,
  meta: Object,
  sessionId: { type: String, required: false },
  candidateName: { type: String, required: true },
});

const sessionSchema = new Schema<ISession>({
  sessionId: { type: String, required: true, unique: true },
  candidateName: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  duration: { type: Number, required: true },
  integrityScore: { type: Number, required: true },
  report: {
    candidateName: { type: String, required: true },
    interviewDuration: { type: Number, required: true },
    focusLostCount: { type: Number, required: true },
    absenceCount: { type: Number, required: true },
    multiFaceCount: { type: Number, required: true },
    phoneDetectedCount: { type: Number, required: true },
    notesDetectedCount: { type: Number, required: true },
    extraDeviceCount: { type: Number, required: true },
    integrityScore: { type: Number, required: true },
    events: [logEventSchema]
  },
  createdAt: { type: Date, default: Date.now },
});

const Session: Model<ISession> = model<ISession>("Session", sessionSchema);
export default Session;