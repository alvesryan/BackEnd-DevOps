import { promises } from "node:dns";
import{User, UserAttributes} from "../models/User"

export class UserRepository{
    async findAll() : Promise<User[]>{
        return await User.findAll();
    }

    async findById(id: number):Promise<User | null>{
        return await User.findByPk(id);
    }

    async create(userData: Omit<UserAttributes, "id">):Promise<User>{
        return await User.create(userData);
    }

    async update(id:number, userData: Partial<UserAttributes>):Promise<User | null>{
        const currentUser = await this.findById(id);
        if(!currentUser) return null;

        await currentUser.update(userData);
        return currentUser;
    }

    async delete(id:number):Promise<boolean>{
        const result = await User.destroy({where: {id}});
        return result > 0;
    }
}