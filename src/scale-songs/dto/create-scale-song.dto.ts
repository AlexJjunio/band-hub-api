import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateScaleSongDto {
  @IsInt()
  scale_id: number;

  @IsInt()
  song_id: number;

  // tone é opcional (coluna nullable).
  @IsOptional()
  @IsString()
  tone?: string;

  @IsInt()
  order: number;
}
