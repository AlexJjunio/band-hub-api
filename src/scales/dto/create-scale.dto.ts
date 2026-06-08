import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ScaleEvent } from '../enums/scale-event.enum';

export class CreateScaleDto {
  @IsEnum(ScaleEvent)
  event: ScaleEvent;

  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  // Campo de auditoria; idealmente vem do token. Opcional por ora.
  @IsOptional()
  @IsInt()
  created_by?: number;
}
