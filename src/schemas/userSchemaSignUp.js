import joi from 'joi';

const userSchemaSignUp=joi.object({
    email:joi.string().email().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
    name:joi.string().min(2).required(),
    password:joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required(),
});
export default userSchemaSignUp;