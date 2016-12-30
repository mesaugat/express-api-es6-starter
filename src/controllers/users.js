import {Router} from 'express';
import HttpStatus from 'http-status-codes';
import * as userService from '../services/userService';

let router = Router();

/**
 * GET /api/users
 */
router.get('/', (req, res, next) => {
  userService.getAllUsers()
    .then(data => res.status(222).json({data}))
    .catch(err => next(err));
});

/**
 * POST /api/users
 */
router.post('/', (req, res, next) => {
  userService.createUser(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({data}))
    .catch(err => next(err));
});

export default router;
