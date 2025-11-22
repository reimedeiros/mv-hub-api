import { Injectable } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { PrismaService } from '../prisma/prisma.service';
import { responseMessageAndData } from '../commons/http-response.util';
import { EstablishmentEntity } from './entities/establishment.entity';

@Injectable()
export class EstablishmentService {
  constructor(private prisma: PrismaService) {}
  async create(createEstablishmentDto: CreateEstablishmentDto) {
    const hasEstablishment = await this.findOne(createEstablishmentDto.cnes);

    if (hasEstablishment) {
      return { message: 'Estabelecimento de saúde já cadastrado !', data: hasEstablishment };
    }

    const response = await this.prisma.establishment.upsert({
      where: {
        cnes: createEstablishmentDto.cnes,
      },
      create: createEstablishmentDto,
      update: createEstablishmentDto,
    });

    const data = responseMessageAndData<EstablishmentEntity, string>(
      response,
      'Estabelecimento de saúde cadastrado com sucesso!',
      'Estabelecimento de saúde não cadastrado!',
    );

    return data;
  }

  async findAll() {
    const response = await this.prisma.establishment.findMany();
    const data = responseMessageAndData(
      response,
      'Estabelecimentos de saúde encontrados com sucesso!',
      'Nenhum Estabelecimento de saúde cadastrado !',
    );

    return data;
  }

  async findOne(cnes: string) {
    const response = await this.prisma.establishment.findMany({ where: { cnes } });
    const data = responseMessageAndData(
      response,
      'Estabelecimento de saúde encontrado com sucesso!',
      `Nenhum Estabelecimento de saúde com o ${cnes} cadastrado !`,
    );

    return data;
  }

  async update(cnes: string, updateEstablishmentDto: UpdateEstablishmentDto) {
    const response = await this.prisma.establishment.update({
      where: { cnes },
      data: updateEstablishmentDto,
    });
    const data = responseMessageAndData(
      response,
      `Estabelecimento de saúde ${cnes} atualizado com sucesso!`,
      `Estabelecimento de saúde ${cnes} não atualizado!`,
    );
    return data;
  }

  async remove(cnes: string) {
    const response = await this.prisma.establishment.delete({ where: { cnes } });
    const data = responseMessageAndData(
      response,
      `Estabelecimento de saúde ${cnes} deletedo com sucesso!`,
      `Estabelecimento de saúde ${cnes} não deletado!`,
    );

    return data;
  }
}
