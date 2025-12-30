import { CreateUserDTO } from "../../dtos/user.dto";
import bcryptjs from "bcryptjs";
import { HttpError } from "../../errors/http-error";
import { UserRepository } from "../../repositories/user.repository";

let userRepository = new UserRepository();

export class AdminUserService{
    async createUser(data : CreateUserDTO){
        //same as src/services/user.service.ts
        const newUser = {
            ...data,
            role: "admin" // <- directly set admin role here 
        };
        return newUser;
    }
    async getAllUsers() {
        const users = await userRepository.getAllUsers();
        //transformation or filtering logic can be added here
        return users;
    }
    async getOneUser(id: string){
        const user = await userRepository.getUserById(id);
        if(!user){
            throw new HttpError(404, "User not found");
        }
        return user;
    }
    //continue all
    
}