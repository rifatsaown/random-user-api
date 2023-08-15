"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dbInstance_1 = require("./middleware/dbInstance");
const app = (0, express_1.default)();
/*------------ Middlewares --------------*/
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(dbInstance_1.dbInstance);
/*------------ Home Routes --------------*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Static HTML file
});
/* Import all Routes */
const userRouter_1 = __importDefault(require("./routes/v1/userRouter"));
/*--------------- Route MiddleWare ---------------*/
app.use('/api/v1/user', userRouter_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map