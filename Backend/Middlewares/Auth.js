// const ensureAuthenticated  = (req, res,next) =>{
//     const auth = req.headers['authorization'];
//     if(!auth){
//         return res.status(403)
//         .json({message: 'Unauthorized Access, jwt token is require'})
//     }

//     try{
//         const decoded = JsonWebTokenError.verify(auth, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch(err) {
//         return res.status(401).json({message: 'Unauthorized, JWT token wrong or expired'})
//     }
// }

// module.exports = ensureAuthenticated;


const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "Unauthorized Access, JWT token is required" });
  }

  // Extract token (remove "Bearer ")
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Token missing after Bearer" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user payload to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};

module.exports = ensureAuthenticated;
