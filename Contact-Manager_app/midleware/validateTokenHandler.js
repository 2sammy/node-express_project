const asyncHandler = require("express-async-handler");
const jwt = require("jsowebtoken");



const validationToken = asyncHandler(async(req,res,next) => {
    let token;
   let authHeader = req.headers.Authorization || req.headers.Authorization
    if(authHeader && authHeader.startswidth("Bearer")){
        token = authHeader.split(" ")[1];
        // verification of the token
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User not authorized");
            }
            req.user = decoded.user;
            next();
        });
        if(!token){
            res.status(402);
            throw new Error("User is not authorized or token is missing");
        }
    }

})

module.exports = validateToken;
