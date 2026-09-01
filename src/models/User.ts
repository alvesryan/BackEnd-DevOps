import {DataTypes, Model} from "sequelize";
import {sequelize} from "../config/Database";

export interface UserAttributes {
    id?: number;
    name: string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    sequelize,
    modelName: 'User',
    tableName: 'UsuarUserios'
});