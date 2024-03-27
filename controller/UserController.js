import UserModel from "../model/User-model.js";

export default class UserController {

    static add(req, res){
      const  {name, email, password} = req.body
      UserModel.addUser(name, email, password);
      res.redirect('/login');
    }

    static login(req, res){
        const {email, password} = req.body
        
        
        const isUser = UserModel.isValidUser(email, password);

        if(isUser) {
            req.session.userEmail = email;
            res.redirect('/')
        } else {
            res.redirect('/login')
        }

    }

    static logout(req, res) {
        req.session.destroy((err)=> {
            if(err) {
                console.log(err)
            }else {
                res.redirect('/login')
            }
        })
    }
}