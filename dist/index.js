"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.get('/', (req, res) => {
    const data = [
        { id: 1, name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
        { id: 2, name: 'Tux', organization: "Linux", birth_year: 1996 },
        { id: 3, name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
    ];
    res.render('index.ejs', {
        title: 'Typescript Express Application',
        style: fs_1.default.readFileSync('./dist/public/css/app.css', 'utf8'),
        data: data,
    });
});
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
/*
    import bodyParser from 'body-parser'
    import helmet from 'helmet'

    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
*/
