import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, PrismaService],
})
export class AuthorizationModule {}
