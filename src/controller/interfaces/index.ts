import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IUserController {
    // Read all users from database || get User By ID
    getUsers(id?: string): Promise<any>
    // Delete User By ID
    deleteUser(id?:string): Promise<any>
    // Create new User
    createUser(user: any):  Promise<any>
    // Update user
    updateUser(id:string, user: any): Promise<any>
}