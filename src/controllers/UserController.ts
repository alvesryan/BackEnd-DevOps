import { Request, Response } from "express"

interface User{
    id: number
    name: string
}

export class UserContorller{
    getAll(req: Request, res: Response) : Response {
        return res.status(201).json()
    }
    getById(req : Request, res : Response) : Response {
        return res.status(201).json()
    }
    update(req : Request, res : Response) : Response {
        return res.status(201).json()
    }
    create(req : Request, res : Response) : Response {
        return res.status(201).json()
    }
    delete(req : Request, res : Response) : Response {
        return res.status(201).json()
    }
}