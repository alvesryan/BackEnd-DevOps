import { DataType, Model } from "sequelize"
import {sequelize} from "../config/database"

export interface UserAtributes{
    id?: number
    name: string
}

export class User extends Model<UserAtributes> implements UserAtributes{
    
}
