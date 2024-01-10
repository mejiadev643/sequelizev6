import { Router } from 'express';
import api from './api.mjs';
import web from './web.mjs';
const router = Router();

router.use(web);
router.use("/api",api);

export default router;