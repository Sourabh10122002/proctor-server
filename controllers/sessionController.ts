import { Request, Response } from "express";
import Session from "../models/Session";

// Create a new session
export const createSession = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            sessionId,
            candidateName,
            startTime,
            endTime,
            duration,
            integrityScore,
            report
        } = req.body;

        // Check if session already exists
        const existingSession = await Session.findOne({ sessionId });
        if (existingSession) {
            res.status(400).json({ error: "Session already exists" });
            return;
        }

        const session = new Session({
            sessionId,
            candidateName,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            duration,
            integrityScore,
            report
        });

        await session.save();
        res.status(201).json(session);
    } catch (error: any) {
        console.error("Error saving session:", error);
        res.status(400).json({ error: error.message });
    }
};

// Get all sessions
export const getAllSessions = async (_req: Request, res: Response): Promise<void> => {
    try {
        const sessions = await Session.find().sort({ createdAt: -1 });
        res.json(sessions);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific session by ID
export const getSessionById = async (req: Request, res: Response): Promise<void> => {
    try {
        const session = await Session.findById(req.params.id);
        if (!session) {
            res.status(404).json({ error: "Session not found" });
            return;
        }
        res.json(session);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a session by sessionId
export const getSessionBySessionId = async (req: Request, res: Response): Promise<void> => {
    try {
        const session = await Session.findOne({ sessionId: req.params.sessionId });
        if (!session) {
            res.status(404).json({ error: "Session not found" });
            return;
        }
        res.json(session);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Generate report for a session by sessionId
export const getSessionReport = async (req: Request, res: Response): Promise<void> => {
    try {
        const session = await Session.findOne({ sessionId: req.params.sessionId });
        if (!session) {
            res.status(404).json({ error: "Session not found" });
            return;
        }

        // Return the complete report
        res.json(session.report);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a session
export const deleteSession = async (req: Request, res: Response): Promise<void> => {
    try {
        const session = await Session.findByIdAndDelete(req.params.id);
        if (!session) {
            res.status(404).json({ error: "Session not found" });
            return;
        }
        res.json({ message: "Session deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};