import { Router } from 'express';

import * as userController from '../controllers/users';
import { findUser, userValidator } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', userController.fetchAll);

/**
 * GET /api/users/:id
 */
router.get('/:id', userController.fetchById);

/**
 * POST /api/users
 */
router.post('/', userValidator, userController.create);

/**
 * PUT /api/users/:id
 */
router.put('/:id', findUser, userValidator, userController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', findUser, userController.deleteUser);

export default router;
