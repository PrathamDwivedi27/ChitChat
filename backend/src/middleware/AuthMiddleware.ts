import jwt from 'jsonwebtoken';
import e, { Request, Response, NextFunction } from 'express';

const authMiddleware= (req: Request, res: Response, next: NextFunction) => {
    const authHeader=req.headers.authorization;

    if(authHeader===null || authHeader===undefined){ 
        return res.status(401).json({message: 'Unauthorized'});
    }

    // Aisa hota hai na Authorisation =Bearer token to token 1 index pe aaya
    const token=authHeader.split(' ')[1];

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
        if(err){
            return res.status(403).json({message: 'Invalid token'});
        }
        // req mein user naam ka cheez hai hi nhi kuch to ham kya karenge jo req hai Request type ka usme user naam ka ek cheez daal denge
        req.user=user as AuthUser;
        // It is a common practice in which for every request we are giving user infos also 
        next();
    });
}

export default authMiddleware;