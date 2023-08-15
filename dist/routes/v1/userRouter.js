"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controller/userController");
const router = express_1.default.Router();
/*------ All routes prefixed with /api/v1/user ------*/
// All GET Requests
router.route("/")
    .get(userController_1.getConfirm);
router.route("/all")
    .get(userController_1.getAllUser);
router.route("/random")
    .get(userController_1.getRandomUser);
// Delete a user
router.route("/delete/:id")
    .delete(userController_1.deleteUser);
// POST Requests
router.route("/save")
    .post(userController_1.saveRandomUser);
exports.default = router;
//# sourceMappingURL=userRouter.js.map