import {Router} from 'express';
import usersController from './controllers/users';
import createUserValidator from './validators/createUserValidator';

/**
 * Contains all API routes for the application.
 */
let router = Router();

router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/users', createUserValidator, usersController);

export default router;
