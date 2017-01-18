import {Router} from 'express';
import swaggerSpec from './utils/swagger';
import usersController from './controllers/users';

/**
 * Contains all API routes for the application.
 */
let router = Router();

/**
 * GET /api/swagger.json
 */
router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * @swagger
 * /:
 *   get:
 *     description: App version
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Application and API version
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/users', usersController);

export default router;
