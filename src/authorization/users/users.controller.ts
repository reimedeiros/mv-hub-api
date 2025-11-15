import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataException } from 'src/services/exceptions/data.exception';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const { message, data } = await this.usersService.create(createUserDto);
      return { message, data };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.usersService.findAll();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const { message, data } = await this.usersService.findOne(id);
      return { message, data };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const data = await this.usersService.update(id, updateUserDto);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const { message, data } = await this.usersService.remove(id);
      return { message, data };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Delete(':id/realRemove')
  async realRemove(@Param('id') id: string) {
    try {
      const { message, data } = await this.usersService.realRemove(id);
      return { message, data };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }
}
