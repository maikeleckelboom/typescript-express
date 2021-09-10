import express, {Express, Request, Response} from 'express'
import fs from 'fs'
import dotenv from 'dotenv'
import path from 'path'
import helmet from 'helmet'

dotenv.config()

const PORT = process.env.PORT || 3000
const app: Express = express()

app.use(helmet());

app.use('/public', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', 'src/views');


app.get('/', (req: Request, res: Response) => {
    const data = [
        {id: 1, name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        {id: 2, name: 'Tux', organization: "Linux", birth_year: 1996},
        {id: 3, name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ]
    res.render('index.ejs', {
        title: 'Typescript Express Application',
        style: fs.readFileSync('./dist/public/css/app.css', 'utf8'),
        data: data,
    })
})

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`))


/*
    import bodyParser from 'body-parser'
    import helmet from 'helmet'

    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
*/
