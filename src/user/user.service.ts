import { Injectable, Module } from "@nestjs/common";
import { RegisterUserRequest, UserResponse } from "./user.module";

@Module({
    providers: [UserService],
})

@Injectable()
export class UserService {
    
    async register(request: RegisterUserRequest): Promise<UserResponse> {
        return null;
    }
}