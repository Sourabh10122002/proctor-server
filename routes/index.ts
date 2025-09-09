import { Router } from "express";
import sessionRoutes from "./sessionRoutes";
import healthRoutes from "./healthRoutes";

const router = Router();

router.use("/api/sessions", sessionRoutes);
router.use("/api/health", healthRoutes);

export default router;