import express from 'express';
import { deleteUser, getAllUser, getConfirm, getRandomUser, saveRandomUser, updateRandomUser } from '../../controller/userController';

const router = express.Router();


/*------ All routes prefixed with /api/v1/user ------*/

// All GET Requests
router.route("/")
        .get(getConfirm);

router.route("/all")
        .get(getAllUser);

router.route("/random")
        .get(getRandomUser);
        
 // POST Requests
router.route("/save")
        .post(saveRandomUser);

// PATCH Requests
router.route("/update/:id")
        .patch(updateRandomUser);

// Delete a user
router.route("/delete/:id")
        .delete(deleteUser);




export default router;