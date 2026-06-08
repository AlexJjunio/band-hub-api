import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { ScaleMemberStatus } from '../enums/scale-member-status.enum';
import { Instrument } from '../../common/enums/instrument.enum';

export class CreateScaleMemberDto {
  @IsInt()
  scale_id: number;

  @IsInt()
  user_id: number;

  @IsEnum(Instrument)
  instrument: Instrument;

  // Opcional: se omitido, o service assume 'pending' ao escalar.
  @IsOptional()
  @IsEnum(ScaleMemberStatus)
  status?: ScaleMemberStatus;
}
