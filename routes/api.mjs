import { Router } from 'express';
import User from '../app/Controllers/UserClass.mjs';

const router = Router();

router.get('/',(req, res) => {
    // You need to instantiate the User class and call the index method
    const user = new User();
    user.index(req, res);
});

router.get('/:id',(req, res) => {
    // You need to instantiate the User class and call the index method
    const user = new User();
    user.show(req, res);
});
router.post('/',(req, res) => {
    // You need to instantiate the User class and call the index method
    const user = new User();
    user.store(req, res);
});

router.put('/:id',(req, res) => {
    const user = new User();
    user.update(req, res);
});

router.delete('/:id',(req, res) => {
    const user = new User();
    user.destroy(req, res);
});

export default router;