import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataException } from '../../services/exceptions/data.exception';
import { MailerService } from '../../mailer/mailer.service';
import { sendMailInterface } from 'src/services/interfaces/sendMail.interface';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const { message, data } = await this.usersService.create(createUserDto);
      // TODO configurar o host de email para fazer isso funcionar.
      // const bodyMailer: sendMailInterface = {
      //   to: createUserDto.email,
      //   from: 'No-Reply hub.mavien.com.br <no-reply@hub.mavien.com.br>',
      //   subject: 'Confirmação de email - hub.mavien.com.br.com',
      //   content: `
      //   Email enviado automaticamente \n
      //   Para confirmar seu email por favor clique no link abaixo. \n
      //   ${process.env['URL_FRONT']}user/confirmEmail/${data?.verificationToken}
      //   `,
      // };
      // await this.mailerService.sendMail(bodyMailer);
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
