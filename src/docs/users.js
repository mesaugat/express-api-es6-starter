/**
 * @swagger
 * definitions:
 *   User:
 *     title: User
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: Unique identifier representing a specific user
 *       name:
 *         type: string
 *         description: Name of the user
 *       createdAt:
 *         type: string
 *         format: date-time
 *         description: User creation datetime
 *       updatedAt:
 *         type: string
 *         format: date-time
 *         description: User update datetime
 *   NewUser:
 *     title: NewUser
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         description: Name of the user
 *   Error:
 *     title: Error
 *     type: object
 *     properties:
 *       code:
 *         type: integer
 *         format: int32
 *       message:
 *         type: string
 *   ServerError:
 *     allOf:
 *       - $ref: '#/definitions/Error'
 *       - title: ServerError
 *   NotFoundError:
 *     allOf:
 *       - $ref: '#/definitions/Error'
 *       - title: NotFoundError
 *   ValidationError:
 *     allOf:
 *       - $ref: '#/definitions/Error'
 *       - title: ValidationError
 *       - properties:
 *           details:
 *             type: array
 *             items:
 *               title: FieldError
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 param:
 *                   type: string
 */

 /**
  * @swagger
  * /users:
  *   get:
  *     summary: List all users
  *     description: Returns users
  *     produces:
  *       - application/json
  *     tags:
  *       - Users
  *     responses:
  *       200:
  *         description: An array of users
  *         schema:
  *           title: Users
  *           type: array
  *           items:
  *             $ref: '#/definitions/User'
  */

  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     summary: Get an user
   *     description: Get user information
   *     produces:
   *       - application/json
   *     tags:
   *       - Users
   *     parameters:
   *       - name: id
   *         description: Unique identifier of the user
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: User object
   *         schema:
   *           title: User
   *           type: object
   *           $ref: '#/definitions/User'
   *       404:
   *         description: User not found
   *         schema:
   *           $ref: '#/definitions/NotFoundError'
   *       500:
   *         description: Internal server error
   *         schema:
   *           $ref: '#/definitions/ServerError'
   */

   /**
    * @swagger
    * /users:
    *   post:
    *     summary: Create a new user
    *     description: Create an user
    *     produces:
    *       - application/json
    *     tags:
    *       - Users
    *     parameters:
    *       - name: UserParams
    *         description: POST params for an user
    *         in: body
    *         required: true
    *         schema:
    *           $ref: '#/definitions/NewUser'
    *     responses:
    *       201:
    *         description: Newly created user object
    *         schema:
    *           title: User
    *           type: object
    *           $ref: '#/definitions/User'
    *       400:
    *         description: Bad request
    *         schema:
    *           $ref: '#/definitions/ValidationError'
    *       500:
    *         description: Internal server error
    *         schema:
    *           $ref: '#/definitions/ServerError'
    */

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: Update an user
     *     description: Update an user
     *     produces:
     *       - application/json
     *     tags:
     *       - Users
     *     parameters:
     *       - name: id
     *         description: Unique identifier of the user
     *         in: path
     *         required: true
     *         type: integer
     *       - name: UserParams
     *         description: PUT params for an user
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/NewUser'
     *     responses:
     *       200:
     *         description: Updated user object
     *         schema:
     *           title: UpdatedUser
     *           type: object
     *           properties:
     *             id:
     *               type: number
     *               description: Unique identifier representing a specific user
     *             name:
     *               type: string
     *               description: Name of the user
     *             updatedAt:
     *               type: string
     *               format: date-time
     *               description: Updated user datetime
     *       400:
     *         description: Bad request
     *         schema:
     *           $ref: '#/definitions/ValidationError'
     *       404:
     *         description: User not found
     *         schema:
     *           $ref: '#/definitions/NotFoundError'
     *       500:
     *         description: Internal server error
     *         schema:
     *           $ref: '#/definitions/ServerError'
     */

     /**
      * @swagger
      * /users/{id}:
      *   delete:
      *     summary: Delete an user
      *     description: Delete an user
      *     produces:
      *       - application/json
      *     tags:
      *       - Users
      *     parameters:
      *       - name: id
      *         description: Unique identifier of the user
      *         in: path
      *         required: true
      *         type: integer
      *     responses:
      *       204:
      *         description: User deleted (no-content)
      *       400:
      *         description: Bad request
      *         schema:
      *           $ref: '#/definitions/ValidationError'
      *       404:
      *         description: User not found
      *         schema:
      *           $ref: '#/definitions/NotFoundError'
      *       500:
      *         description: Internal server error
      *         schema:
      *           $ref: '#/definitions/ServerError'
      */
