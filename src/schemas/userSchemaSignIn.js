import joi from 'joi';

const userSchemaSignIn=joi.object({
    email:joi.string().email().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
    password:joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required(),
});

export default userSchemaSignIn;