import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class EstablishmentClassificationEntity {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
