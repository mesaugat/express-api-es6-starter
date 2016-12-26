import {Router} from 'express';
import User from '../models/user';

let router = Router();

/**
 * Route: /api/users
 */
router.get('/', (req, res, next) => {
  User.fetchAll().then(users => {
    res.json(users.toJSON());
  });
});

export default router;
