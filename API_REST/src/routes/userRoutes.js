import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Should not exist
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> list all users -> GET
store/create -> create new users -> POST
delete -> delete an user -> DELETE
show -> shows an user -> GET
update -> update an user -> PATCH or PUT
*/
