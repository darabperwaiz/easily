export default class ApplicantModel {
    constructor(applicantId, jobId, name, email, contact, resumepath) {
        this.applicantId = applicantId;
        this.jobId = jobId
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resumepath = resumepath;
    }

    static addApplicants(jobId, name, email, contact, resumepath) {
        const applicantId = Math.floor(Math.random() * Date.now());
        const newApplicant = new ApplicantModel(applicantId, jobId, name, email, contact, resumepath)
        applicants.push(newApplicant);
    }

    static getApplicantsById(id) {
        const filterApplicants = applicants.filter((applicant)=> applicant.jobId == id)
        return filterApplicants
    }

    static getAllApplicants(){
        return applicants
    }
}


let applicants = []