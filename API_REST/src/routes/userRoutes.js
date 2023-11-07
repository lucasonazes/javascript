import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);
router.get('/', UserController.index);

export default router;

/*
index -> list all users -> GET
store/create -> create new users -> POST
delete -> delete an user -> DELETE
show -> shows an user -> GET
update -> update an user -> PATCH or PUT
*/
