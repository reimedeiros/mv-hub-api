import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ActivityEntity } from '../../commons/auxiliaryEntities/activity.entity';
import { EstablishmentClassificationEntity } from '../../commons/auxiliaryEntities/establishment-classification.entity';

export class EstablishmentEntity {
  @IsInt()
  id: number;

  @IsString()
  @Length(7, 7)
  cnes: string;

  @IsString()
  @Length(14, 14)
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  tradeName: string;

  @IsString()
  @IsNotEmpty()
  corporateName: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @Length(8, 8)
  zipCode: string;

  @IsString()
  @Length(11, 11)
  directorCpf: string;

  @IsInt()
  classificationId: number;

  @Type(() => EstablishmentClassificationEntity)
  @IsOptional()
  classification?: EstablishmentClassificationEntity | null;

  @IsOptional()
  @IsString()
  mainActivityId?: string | null;

  @Type(() => ActivityEntity)
  @IsOptional()
  mainActivity?: ActivityEntity;

  @IsOptional()
  @IsString()
  secondaryActivityId?: string | null;

  @Type(() => ActivityEntity)
  @IsOptional()
  secondaryActivity?: ActivityEntity;

  @IsBoolean()
  susSystem: boolean;

  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @Type(() => Date)
  @IsDate()
  updatedAt: Date;
}
