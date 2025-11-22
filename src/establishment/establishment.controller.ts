import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { DataException } from 'src/commons/exceptions/data.exception';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  async create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    try {
      const { message, data } = await this.establishmentService.create(createEstablishmentDto);
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
      const data = await this.establishmentService.findAll();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Get(':cnes')
  async findOne(@Param('cnes') cnes: string) {
    try {
      const data = await this.establishmentService.findOne(cnes);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Patch(':cnes')
  async update(
    @Param('cnes') cnes: string,
    @Body() updateEstablishmentDto: UpdateEstablishmentDto,
  ) {
    try {
      const data = await this.establishmentService.update(cnes, updateEstablishmentDto);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }

  @Delete(':cnes')
  async remove(@Param('cnes') cnes: string) {
    try {
      const data = await this.establishmentService.remove(cnes);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new DataException(error.message);
      }

      throw new DataException('Erro inesperado.');
    }
  }
}
