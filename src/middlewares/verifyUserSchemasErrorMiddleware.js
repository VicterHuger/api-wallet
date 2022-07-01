async function verifyUserSchemasErrorMiddleware(req,res,next){
    const error=res.locals.error;
    const user=res.locals.user;
   
    if(error){
        const errorMessages=error.details.map(item=>item.message);
        return res.status(404).send(errorMessages);
    }
    res.locals.user=user;
    next();
}
export default verifyUserSchemasErrorMiddleware;