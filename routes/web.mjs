import { Router } from 'express';
const router = Router();

router.get('/', function (req, res) {
    res.send('Hello World from web')
});


export default router;