async function getUser(req,res){
    const user=res.locals.user;
    
    delete user.email;
    delete user._id;

    return res.status(200).send(user);
};

export default getUser;