import { UserType } from "src/modules/auth/dto/create-auth.dto"

export class RegisterUserRequest{
    email: string
    nrp: number
    username: string
    fullname: string
    password: string
    type: UserType
}

export class UserResponse {

}