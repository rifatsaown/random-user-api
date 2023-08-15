"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbInstance_1 = require("./middleware/dbInstance");
const app = (0, express_1.default)();
/*------------ Middlewares --------------*/
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(dbInstance_1.dbInstance);
/*------------ Home Routes --------------*/
app.get("/", (req, res) => {
    const filePath = fs_1.default.readFileSync(path_1.default.join(__dirname, "../public/index.html"), "utf8");
    res.send(filePath);
});
/* Import all Routes */
const userRouter_1 = __importDefault(require("./routes/v1/userRouter"));
/*--------------- Route MiddleWare ---------------*/
app.use('/api/v1/user', userRouter_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map