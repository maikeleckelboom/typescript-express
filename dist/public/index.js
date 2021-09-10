"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
__dirname = 'dist';
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(__dirname + '/public'));
const template = `
    <h1>Hello from the TypeScript!</h1>
    <p>This page is served with Express in NodeJs.</p>
`;
app.get('/', (req, res) => {
    res.send(template);
});
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
