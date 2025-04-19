import { Injectable, Module } from "@nestjs/common";
import { RegisterUserRequest } from "./user.module";

@Module({
    providers: [UserService],
})

@Injectable()
export class UserService {
    register(){
        
    }
    constructor(
        private validationservice:
    )
    async register(request: RegisterUserRequest): Promise<UserResponse> {
        return null;
    }
}