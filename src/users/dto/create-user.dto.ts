import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enums/user-role.enum';
import { Instrument } from '../../common/enums/instrument.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  // Opcional: se omitido, a entidade aplica o default (musician).
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  // Instrumentos que o músico toca. Esperado apenas quando role = musician.
  @IsOptional()
  @IsArray()
  @IsEnum(Instrument, { each: true })
  instruments?: Instrument[];
}
