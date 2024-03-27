export default class JobModel {
    constructor(id, jobcategory, jobdesignation, joblocation, companyname, salary, applyby, skillsrequired, numberofopenings, jobposted, applicants) {
        this.id = id;
        this.jobcategory = jobcategory;
        this.jobdesignation = jobdesignation;
        this.joblocation = joblocation;
        this.companyname = companyname;
        this.salary = salary;
        this.applyby = applyby;
        this.skillsrequired = skillsrequired;
        this.numberofopenings = numberofopenings;
        this.jobposted = jobposted;
        this.applicants = applicants;
    }

    static addJob(jobcategory, jobdesignation, joblocation, companyname, salary, applyby, skillsrequired, numberofopenings, jobposted) {
        const id = Math.floor(Math.random() * Date.now());
        const applicants = [];
        const newJob = new JobModel(id, jobcategory, jobdesignation, joblocation, companyname, salary, applyby, skillsrequired, numberofopenings, jobposted, applicants )
        Jobs.push(newJob)
    }

    static addApplicants(jobId, applicantIds){
        const getIndex = Jobs.findIndex((job)=> job.id == jobId)
        Jobs[getIndex].applicants = applicantIds
    }

    static getAllJobs(){
        return Jobs
    }

    static getJobById(id) {
        const findIndex = Jobs.findIndex((job)=> job.id == id)
        if(findIndex == -1) {
            return false
        } else {

            return Jobs[findIndex];
        }
    }
}


let Jobs = [
    new JobModel(7894456123, 'Tech', 'Full-Stack Developer', 'Greater Noida', 'innoAge technologies Pvt Ltd', '7-8 LPA', '2024-03-31', ['React', 'NodeJs', 'Express', 'MongoDB'], '5', '26/3/2024, 10:22:56 pm', []),
    new JobModel(7945956874, 'Tech', 'Front-End Developer', 'Gurgaon', 'H&M Innovance llp', '5-7 LPA', '2024-04-02', ['React', 'JS', 'NodeJs'], '3', '22/3/2024, 07:22:56 pm', []),
    new JobModel(4569875462, 'Tech', 'Java Developer', 'Bangalore', 'Quizaro ExtendedEdge', '3-5 LPA', '2024-04-05', ['JAVA', 'SQL', 'AWS'], '7', '22/3/2024, 07:22:56 pm', []),
    new JobModel(6587952453, 'Tech', 'Software Developer Intern', 'Remote only', 'BITCS', '6-6.5 LPA', '2024-05-25', ['JAVA', 'React', 'JS', 'NodeJs'], '2', '22/3/2024, 07:22:56 pm', []),
    new JobModel(5987458962, 'Tech', 'Front-End Developer', 'Greater Noida', 'Vipas.Ai', 'Stipend for 3 months will be 10K/month and then CTC-3 LPA', '2024-04-10', ['React', 'JS', 'NodeJs'], '3', '22/3/2024, 07:22:56 pm', []),
    new JobModel(2354789462, 'Tech', 'Back-End Developer', 'Hyderabad', 'Graphketing', '6 LPA', '2024-04-15', ['React', 'JS', 'NodeJs', 'Express', 'MongoDB'], '3', '22/3/2024, 07:22:56 pm', []),
    new JobModel(1245789563, 'Tech', 'Front-End Developer', 'Gurgaon', 'H&M Innovance llp', '5-7 LPA', '2024-04-02', ['React', 'JS', 'NodeJs'], '3', '22/3/2024, 07:22:56 pm', []),
    new JobModel(3214569875, 'Tech', 'Front-End Developer', 'Gurgaon', 'H&M Innovance llp', '5-7 LPA', '2024-04-02', ['React', 'JS', 'NodeJs'], '3', '22/3/2024, 07:22:56 pm', []),

]