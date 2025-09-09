import { Router } from "express";
import {
    createSession,
    getAllSessions,
    getSessionById,
    getSessionBySessionId,
    getSessionReport,
    deleteSession
} from "../controllers/sessionController";

const router = Router();

router.post("/", createSession);
router.get("/", getAllSessions);
router.get("/:id", getSessionById);
router.get("/by-session/:sessionId", getSessionBySessionId);
router.get("/:sessionId/report", getSessionReport);
router.delete("/:id", deleteSession);

export default router;