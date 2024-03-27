import nodemailer from 'nodemailer'

export const sendMail = async(name, applicantEmail, designation, companyname) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'darabperwaiz87@gmail.com',
            pass: 'spcbrbasfvxotedz'
        }
    })

    const mailOptions = {
        from: '"Easily Get Discoverd. Get Hired" <darabperwaiz87@gmail.com>',
        to: applicantEmail,
        subject: 'Placement Cell Update | Application Success',
        text: `Dear ${name}! \n \n This email is to confirm that your application for ${designation} with ${companyname} has been received and will be forwarded to the company.  We will keep you posted about your candidature and application status.`
    }

    try {
        const result = await transporter.sendMail(mailOptions)
        console.log('Email sent successfully')
    } catch (error) {
        console.log('Email send failed with error', error)
        
    }

}