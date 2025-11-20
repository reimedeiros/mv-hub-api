import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as CryptoJS from 'crypto-js';
import { responseMessageAndData } from 'src/commons/http-response.util';
import { UserInterface } from '../../commons/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = CryptoJS.MD5(createUserDto.password).toString();
    createUserDto.verificationToken = CryptoJS.MD5(createUserDto.email).toString();
    createUserDto.isActive = true;

    const hasUser = await this.findOneByCpfOrUsername(createUserDto.cpf);

    if (hasUser) {
      return { message: 'Usuário já cadastrado !', data: hasUser };
    }

    const response = await this.prisma.users.upsert({
      where: {
        cpf: createUserDto.cpf,
      },
      create: createUserDto,
      update: createUserDto,
    });

    const data = responseMessageAndData<UserInterface, string>(
      response,
      'Usuário cadastrado com sucesso!',
      'Usuário não cadastrado!',
    );
    return data;
  }

  async findAll() {
    const response = await this.prisma.users.findMany({ where: { isActive: true } });
    const data = responseMessageAndData(
      response,
      response.length > 0 ? 'Usuários encontrados com sucesso!' : 'Nenhum Usuário cadastrado !',
      'Usuários não cadastrados!',
    );

    return data;
  }

  async findOne(id: string) {
    const response = await this.prisma.users.findUnique({ where: { id, isActive: true } });
    const data = responseMessageAndData(
      response,
      'Usuário encontrado com sucesso!',
      'Usuário não cadastrado!',
    );

    return data;
  }

  async findOneByCpfOrUsername(data: string) {
    const response = await this.prisma.users.findFirst({
      where: { OR: [{ cpf: data }, { username: data }], isActive: true },
    });

    return response;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const response = await this.prisma.users.update({ where: { id }, data: updateUserDto });
    const data = responseMessageAndData(
      response,
      'Usuário atualizado com sucesso!',
      'Usuário não atualizado!',
    );
    return data;
  }

  async remove(id: string) {
    const response = await this.prisma.users.update({ where: { id }, data: { isActive: false } });
    const data = responseMessageAndData(
      response,
      'Usuário deletedo com sucesso!',
      'Usuário não deletado!',
    );

    return data;
  }

  async realRemove(id: string) {
    const response = await this.prisma.users.delete({ where: { id } });
    const data = responseMessageAndData(
      response,
      'Usuário deletedo com sucesso!',
      'Usuário não deletado!',
    );

    return data;
  }
}
