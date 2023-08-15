import express from 'express';
import { deleteUser, getAllUser, getConfirm, getRandomUser, saveRandomUser } from '../../controller/userController';

const router = express.Router();


/*------ All routes prefixed with /api/v1/user ------*/

// All GET Requests
router.route("/")
        .get(getConfirm);

router.route("/all")
        .get(getAllUser);

router.route("/random")
        .get(getRandomUser);

// Delete a user
router.route("/delete/:id")
        .delete(deleteUser);

// POST Requests
router.route("/save")
        .post(saveRandomUser);



export default router;