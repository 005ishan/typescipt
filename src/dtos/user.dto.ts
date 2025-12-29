import z, { email } from "zod";
import { UserSchema } from "../types/user.type";

//reuse UserSchema from types
export const CreateUserDTO = UserSchema.pick(
    {
        firstName : true,
        lastName: true,
        email: true,
        username: true,
        password: true
    }
).extend( //add new atribute to zod
    {
        confirmPassword: z.string().min(6)
    }
).refine( //extra validation for confirmPassword
    (data) => data.password === data.confirmPassword,
    {
        message: "Password do not match",
        path: ["confirmPassword"]
    }
)
export type CreateUserDTO = z.infer<typeof CreateUserDTO>;

export const LoginUserDTO = z.object({
    email: z.email(),
    password: z.string().min(6)
});
export type LoginUserDTO = z.infer<typeof LoginUserDTO>;