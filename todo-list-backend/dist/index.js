"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// State (count the number of requests)
let count = 0;
// When someone makes a request to http://localhost:3000/, run this code, and give this reply
app.get('/', (req, res) => {
    res
        .setHeader('Access-Control-Allow-Origin', '*')
        .status(200)
        .send('Hello, TypeScript Express!');
});
app.get("/ping", (req, res) => {
    count++;
    let responseContent = {
        message: "pong",
        count: count,
    };
    res
        .setHeader('Access-Control-Allow-Origin', '*')
        .status(200)
        .json(responseContent);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
