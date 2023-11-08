import dotenv from 'dotenv'
dotenv.config()
import expresss from 'express'
import databaseConnection from './db/dbConnenction.js'
import router from './routes/todo.route.js'


const app=expresss()
const PORT=process.env.PORT || 4000
const URL=process.env.DATABASE_URI



// database connection-----------
databaseConnection(URL)

// middleware set up

app.use(expresss.static('public'))
app.set('view engine','ejs');
app.use(expresss.urlencoded({extended:false}))
app.use(expresss.json());

// load routes--
app.use('/',router)

app.listen(PORT,()=>console.log(`server started at ${PORT}`))


