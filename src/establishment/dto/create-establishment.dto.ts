import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateEstablishmentDto {
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

  @IsOptional()
  @IsString()
  mainActivityId?: string;

  @IsOptional()
  @IsString()
  secondaryActivityId?: string;

  @IsBoolean()
  susSystem: boolean;
}
