import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException({
        success: false,
        error_code: 101,
        message: 'Email already registered',
        data: null,
      });
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        nrp: dto.nrp,
        username: dto.username,
        fullname: dto.fullname,
        password: hashedPassword,
        type: dto.type,
      },
    });

    return {
      success: true,
      message: 'success creating an account',
      data: [
        {
          id: user.id,
          token: '',
          refresh_token: '',
        },
      ],
    };
  }

  async login(dto: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({
    where: { email: dto.email },
    });
  
    if (!user) {
      throw new UnauthorizedException({
        success: false,
        error_code: 102,
        message: 'Invalid email or password',
        data: null,
      });
    }
  
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
  
    if (!isPasswordValid) {
      throw new UnauthorizedException({
        success: false,
        error_code: 103,
        message: 'Invalid email or password',
        data: null,
      });
    }
  
    return {
      success: true,
      message: 'Login successful',
      data: [
        {
          id: user.id,
          token: '',
          refresh_token: '',
        },
      ],
    };
  }
}
