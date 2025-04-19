import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}

// export class RegisterUserRequest {
//     username: string;
//     password: string;
//     name: string;
// }

// export class UserResponse {
//     username: string;
//     name: string;
//     token?: string;
// }

// export class LoginUserRequest {
//     username: string;
//     password: string;
// }