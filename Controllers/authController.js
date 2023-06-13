const User = require("./../Models/userModel");
const signInToken = require("./../utils/jwtToken");

// create user
exports.createUser = async (req, res) => {
    const doc = await User.create({
                                        username: req.body.username,
                                        email: req.body.email,
                                        password: req.body.password,
                                        passwordConfirm: req.body.passwordConfirm,
                                    });
    const token = signInToken(doc._id)
    try {
        res.status(200).json({
        message: "success",
        token,
        data: doc,
        });
    } catch (err) {
        res.status(400).json({
        message: "fail",
        err,
        });
    }
};

// login user
exports.loginUser = async (req, res) => {
    try {
    // take in user details
    const {username, password}=req.body
    
    // check if the user details is provided
    if (!username || !password){
        return res.status(200).json({
            message: "fail",
            err: "Provide your login credentials"
            });
    }
    // check if the user details is in the db
    const user= await User.findOne({username}).select("+password")
    const compare=await user.comparePassword(password, user.password)

    if (!user || !compare){
        return res.status(200).json({
            message: "fail",
            err: "Incorrect Email or Password"
            });
    }
    // login the user
    const token = signInToken(user._id)
    res.status(200).json({
        message: "success",
        token,
    }); 
    } catch (err) {
        res.status(400).json({
        message: "fail",
        err,
        });
    }
};