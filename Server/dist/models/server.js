"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        console.log("PORT:", process.env.PORT);
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicación corriendo en el puerto", this.port);
        });
    }
}
exports.default = Server;
