async function verifyUserSchemasErrorMiddleware(req,res,next){
    const error=res.locals.error;
    const user=res.locals.user;
    const authRequest=res.locals.authRequest;
    if(error){
        const errorMessages=error.details.map(item=>item.message);
        let message='';
        if(/password/.test(errorMessages) && authRequest==='sign-up' ){
            message='Senha fraca/moderada -> Digite uma senha de pelo menos 8 dígitos, 1 caractere especial, 1 número, 1 letra minúscula e 1 letra maiúscula';    
        }else if(/password/.test(errorMessages) && authRequest==='sign-in' ){
            message='Dados inválidos! Verifique os dados inseridos!';  
        }else{
            message=errorMessages.join(';');
        }
        
        return res.status(422).send(message);
    }
    res.locals.user=user;
    next();
}
export default verifyUserSchemasErrorMiddleware;