import { Request, Response } from "express"
import { UserServices } from "../services/UserServices"
import { report } from "node:process"

export class UserContorller{
    private userService : UserServices

    constructor(){
        this.userService = new UserServices()
    }

    async getAll(req: Request, res: Response) : Promise<Response> {
        try{
            const users = await this.userService.getAllUsers();
            return res.status(200).json(users)
        } catch(error){
            return res.status(500).json({message : "Error on data base"})
        }
    }

    async getById(req : Request, res : Response) : Promise<Response> {
        try{
            const id = Number(req.params.id);
            const user = await this.userService.getUserById(id);
            return res.status(200).json(user)

        } catch(error){
            return res.status(404).json({message: (error as Error).message})
        }
    }

    async update(req : Request, res : Response) : Promise<Response> {
       return res.status(201).json()
    }

    async create(req : Request, res : Response) : Promise<Response> {
        try{
            const {name} = req.body
            const newUser = await this.userService.createUser({name})
            return res.status(201).json(newUser)
        } catch (error){
            return res.status(404).json({message: (error as Error).message})
        }
    }

    async delete(req : Request, res : Response) : Promise<Response> {
        return res.status(201).json()
    }
}