import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from 'src/mailer/mailer.service';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env['JWT_SECRET'],
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, PrismaService, MailerService, ConfigService],
})
export class AuthorizationModule {}
