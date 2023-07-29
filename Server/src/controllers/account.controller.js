import Account from "../models/account.model";

class AccountController {

    async handleLogin(req, res, next) {
        const { username, password } = req.body;
        try {
            const response = await Account.findOne({ username: username, password: password });
            if (response) return res.json(response);
            else return res.json(null);
        } catch (error) {
            console.log(error);
        }

     }
    
    async handleRegister(req, res, next) {
        const { username, password, name, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.json({
                message: 'Password do not match'
            })
        } else {
            try {
                await Account.create({ name: name, password: password, username: username });
                return res.json({
                    message: 'Account created successfully'
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    async handleChangePassword(req, res, next) {
        const { _id, oldPassword, newPassword, confirmPassword } = req.body;
        const { password } = await Account.findById(_id);
        if (oldPassword !== password) {
            return res.json({
                message: 'Old password is not correct',
            })
         }
        else if (newPassword !== confirmPassword) {
            return res.json({
                message: 'Password do not match'
            })
        } else {
            try {
                const response = await Account.updateOne({ _id: _id }, { password: newPassword })
                return res.json({
                    message: 'Account updated new password successfully'
                })
            } catch (error) {
                console.log(error)
            }
        }
     }
}

export default new AccountController;