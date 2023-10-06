const jwt = require('jsonwebtoken')
const JWT_SECRET="dsfnsdjkafjdhf@3864"
const userAuth = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer")){
        next("Authentication Failed")
    }
   if(authHeader) var token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token,JWT_SECRET)
        req.user = {userId : payload.userId}
        next();
    } catch (error) {
        next("Authentication Failed")
    }
}

module.exports=userAuth