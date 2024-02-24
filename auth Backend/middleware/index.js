const jwt = require("jsonwebtoken")

require("dotenv").config();

exports.Varification=async(req, res, next)=>{
    const token = req.headers.authorization;
    // console.log(token);
    const user=jwt.verify(token,process.env.JWT_SECREAT,(err,res)=>{
      if(err){
        console.log(err);
        return false
      }
        return res;
    })

    if(user===false){
      return res.status(401).json({ status: "error", msg: 'Plese go For login' });
    }
    else{
      req.body.user_id=user.email;
      next();
    }

}
