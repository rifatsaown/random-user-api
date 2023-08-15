import express from 'express';
import { getAllUser, getConfirm } from '../../controller/userController';

const router = express.Router();


// all routes prefixed with /api/v1

router.route("/")
        .get(getConfirm);

router.route("/allusers")
        .get(getAllUser);




export default router;