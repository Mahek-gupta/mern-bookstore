// const UserModel = require("../Models/User");
// const jwt = require('jsonwebtoken');
//     const bcrypt = require('bcrypt')

// const signup = async (req, res) => {
// try{
//     const {name, email, password} = req.body;
//     const user = await UserModel.findOne({email})

//     if(user) {
//         return res.status(409).json({message: "user already exists", success: false})
//     }
//     const userModel = new UserModel({name, email, password});
//     userModel.password = await bcrypt.hash(password, 10);
//     await userModel.save()
//     res.status(201).json({message: "user created successfully", success: true})
// }
// catch(err){
//     res.status(500).json({message: "internal server error", success: false})
// }
// }

// const login = async (req, res) => {
//     try{
//         const {email, password} = req.body;
//         const user = await UserModel.findOne( { email })
//         const errorMsg = "Auth email failed or password is wrong"
//         if(!user){
//             return res.status(403).json({message: errorMsg , success: false})
//         }
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if(!isPasswordValid){
//       return res.status(403).json({message: errorMsg , success: false})
//         }

//         const jwtToken = jwt.sign({email: user.email, _id: user.__id},
// process.env.JWT_SECRET, 
// {expiresIn: '24h'}
//         )

//         res.status(200).json({
//             message: "login success",
//             success: true,
//             jwtToken,
//             email,
//             name: user.name,
//         })
// }
// catch(err){
//     res.status(500).json({message: "internal server error", success: false})
// }
// }
// module.exports = {
//     signup,
//     login
// }


const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = "Auth failed, email or password is wrong";

    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    // ✅ use correct _id
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login success",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  signup,
  login,
};
