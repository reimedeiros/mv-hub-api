import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class ActivityEntity {
  @IsString()
  @Length(2, 2)
  id: string;

  @IsString()
  @IsNotEmpty()
  activity: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
