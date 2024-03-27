import express from 'express';
import session from "express-session";
import expressEjsLayouts from "express-ejs-layouts";
import path from 'path';
import { uploads } from "./middleware/fileUpload.js";
import { auth } from "./middleware/auth.js";
import JobController from "./controller/JobController.js";
import UserController from "./controller/UserController.js";

const app = express();
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'token',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));
app.use(expressEjsLayouts)
app.use(express.static(path.join(path.resolve(), 'public')))


app.post('/register', UserController.add)

app.get('/login', (req, res)=> {
    res.render('partials/login', {userEmail: req.session.userEmail})
})
app.post('/login', UserController.login)

app.get('/logout', UserController.logout);


app.get('/', (req, res)=> {
    res.render('landing/landing', {userEmail: req.session.userEmail});
})

app.get('/jobs', JobController.getJob)

app.get('/jobs/:jobId', JobController.getById)

app.get('/jobs/applicants/:jobId',  auth, JobController.getapplicantById)

app.get('/postjob',  auth, (req, res)=> {
    res.render('postJob/postJob', {userEmail: req.session.userEmail});
})

app.post('/postjob', auth, JobController.add)

app.post('/applyjob', uploads.single('resumepath'), JobController.applyJob )

app.get('/applicants', auth, JobController.getApplicants)

app.listen(process.env.PORT || 3000, (req, res)=> {
    console.log('Server is running on port 3000');
})