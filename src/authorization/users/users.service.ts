import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    // TODO criar um findbyemail e ver se já tem o usuário cadastrado e se já existir só mudar o isActive de false para true.
    createUserDto.password = CryptoJS.MD5(createUserDto.password).toString();
    const response = await this.prisma.users.create({ data: createUserDto });
    const data = this.responseMessageAndData(
      response,
      'Usuário cadastrado com sucesso!',
      'Usuário não cadastrado!',
    );
    return data;
  }

  async findAll() {
    const response = await this.prisma.users.findMany({ where: { isActive: true } });
    const data = this.responseMessageAndData(
      response,
      'Usuários encontrados com sucesso!',
      'Usuários não cadastrados!',
    );

    return data;
  }

  async findOne(id: string) {
    const response = await this.prisma.users.findUnique({ where: { id, isActive: true } });
    const data = this.responseMessageAndData(
      response,
      'Usuário encontrado com sucesso!',
      'Usuário não cadastrado!',
    );

    return data;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const response = await this.prisma.users.update({ where: { id }, data: updateUserDto });
    const data = this.responseMessageAndData(
      response,
      'Usuário atualizado com sucesso!',
      'Usuário não atualizado!',
    );
    return data;
  }

  async remove(id: string) {
    const response = await this.prisma.users.update({ where: { id }, data: { isActive: false } });
    const data = this.responseMessageAndData(
      response,
      'Usuário deletedo com sucesso!',
      'Usuário não deletado!',
    );

    return data;
  }

  async realRemove(id: string) {
    const response = await this.prisma.users.delete({ where: { id } });
    const data = this.responseMessageAndData(
      response,
      'Usuário deletedo com sucesso!',
      'Usuário não deletado!',
    );

    return data;
  }

  responseMessageAndData(responseDB: unknown, successMessage: string, faildMessage: string) {
    const data = {
      message: responseDB ? successMessage : faildMessage,
      data: responseDB ?? undefined,
    };
    return data;
  }
}
