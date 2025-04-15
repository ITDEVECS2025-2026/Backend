import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

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
}
