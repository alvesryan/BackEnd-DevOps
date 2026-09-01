import { UserRepository } from "../repository/UserRepository"
import { UserAttributes} from "../models/User"
import { error } from "node:console"

export class UserServices{
    private userRepository : UserRepository

    constructor(){
        this.userRepository = new UserRepository()
    }

    async getAllUsers(){
        return await this.userRepository.findAll()
    }

    async getUserById(id: number){
        const user = await this.userRepository.findById(id)
        if(!user){
            throw new Error("User not found")
        }
        return user
    }

    async createUser(userData: Omit<UserAttributes, "Id">){
        return await this.userRepository.create(userData)
    }

}
