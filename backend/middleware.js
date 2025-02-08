const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const tokenHeader = req.headers["authorization"];

    if(!tokenHeader){
        return res.status(403).json({
            message: "Unauthorized token",
        });
    }

    const token = tokenHeader.split(" ")[1];
    console.log("got token: ", token)

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        console.log("decoded: ", decoded);
        req.userId = decoded.userId;
        next();
    }
    catch(err){
        return res.status(403).json({message: "inside catch block"});
    }

   
}
module.exports = authMiddleware;