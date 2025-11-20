import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthException } from '../../commons/exceptions/auth.exception';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOneByCpfOrUsername(username);
    if (user?.password !== CryptoJS.MD5(pass).toString()) {
      throw new AuthException('Erro de autenticação - Username/Email ou Password incorreto(s)!');
    }
    const payload = { sub: user.id, username: user.username, role: user.role, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
