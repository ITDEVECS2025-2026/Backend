import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength, Matches } from 'class-validator';

export enum UserType {
  ASLAB = 'aslab',
  USER = 'user',
}

export class RegisterDto {
  @IsEmail()
  email: string;

  // Jika nrp adalah angka, gunakan @IsNumber()
  @IsNumber()
  nrp: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[0-9])/, { message: 'Password must contain at least one number' })
  password: string;

  @IsEnum(UserType, { message: 'type must be either aslab or user' })
  type: UserType;
}
