import JobModel from "../model/Job-Model.js";
import ApplicantModel from "../model/Applicant.js";
import { sendMail } from "../middleware/sendMail.js";

export default class JobController{

    static add(req, res) {
        // console.log(req.body)
        function formatDate() {
            let d = new Date();
            let n = d.toLocaleString([], {hour12: true});
            return n;
        }

        const jobposted = formatDate();
        const {jobcategory, jobdesignation, joblocation, companyname, salary, applyby, skillsrequired, numberofopenings} = req.body;
        JobModel.addJob(jobcategory, jobdesignation, joblocation, companyname, salary, applyby, skillsrequired, numberofopenings, jobposted)
        res.redirect('/jobs')
    }

    static getJob(req, res) {
        const allJobs = JobModel.getAllJobs();
        res.render('jobs/jobs', {jobs: allJobs, userEmail: req.session.userEmail})
    }

    static getById(req, res) {
        const id = req.params.jobId
        const job = JobModel.getJobById(id)
        // res.send(job)
        res.render('jobdetail/jobdetail', {job: job, userEmail: req.session.userEmail});
    }

    static applyJob(req, res) {
        const {jobId, name, email, contact} = req.body
        const resumepath = '/uploads/'+req.file.filename
        ApplicantModel.addApplicants(Number(jobId), name, email, contact, resumepath);
        const applicants = ApplicantModel.getApplicantsById(Number(jobId))
        const applicantsId = applicants.map((applicant)=> {
            return applicant.applicantId
        })

        JobModel.addApplicants(Number(jobId), applicantsId)

        const job = JobModel.getJobById(Number(jobId))
        console.log(job)

        sendMail(name, email, job.jobdesignation, job.companyname)
        // change path
        res.redirect('/jobs')
    }

    static getapplicantById(req, res) {
        const {jobId} = req. params
        const applicants = ApplicantModel.getApplicantsById(jobId)
        res.render('applicants/applicants', {applicants, userEmail: req.session.userEmail});
    }

    static getApplicants(req, res){
       const all =  ApplicantModel.getAllApplicants()
       res.send(all)
    }
    

}