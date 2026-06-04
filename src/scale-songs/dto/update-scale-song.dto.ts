import { PartialType } from '@nestjs/swagger';
import { CreateScaleSongDto } from './create-scale-song.dto';

export class UpdateScaleSongDto extends PartialType(CreateScaleSongDto) {}
