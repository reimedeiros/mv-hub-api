import {
  IsEmail,
  IsOptional,
  IsString,
  IsBoolean,
  IsDateString,
  IsInt,
  Min,
  IsEnum,
} from 'class-validator';
import { UserRole } from '../enums/user-role.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsDateString()
  lastLogin?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  failedLogins?: number;

  @IsOptional()
  @IsDateString()
  emailVerified?: string;

  @IsOptional()
  @IsString()
  verificationToken?: string;

  @IsOptional()
  @IsString()
  resetPasswordToken?: string;

  @IsOptional()
  @IsDateString()
  resetPasswordExpires?: string;

  @IsOptional()
  @IsString()
  lastIp?: string;

  @IsOptional()
  @IsString()
  registeredIp?: string;
}
