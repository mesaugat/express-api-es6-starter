import {Router} from 'express';
import * as userService from '../services/userService';

let router = Router();

/**
 * Route: /api/users
 */
router.get('/', (req, res, next) => {
  userService.getAllUsers()
    .then(data => res.json({data}))
    .catch(err => next(err));
});

export default router;
