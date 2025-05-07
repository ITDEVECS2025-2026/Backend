import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { z } from 'zod';
import { ZodPipe } from 'src/zod/zod.pipe';

const login_schema = z.object({
  email: z.string().email(),
  password: z.string()
})

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Post('register')
  async register(@Body() registerAuthDto: RegisterDto) {
    return this.authService.register(registerAuthDto);
  }

@Post('login')
  async login(@Body(new ZodPipe(login_schema)) body){
    return this.authService.login({email: body.email, password: body.password})
  }
}
