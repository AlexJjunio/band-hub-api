import { PartialType } from '@nestjs/swagger';
import { CreateScaleMemberDto } from './create-scale-member.dto';

export class UpdateScaleMemberDto extends PartialType(CreateScaleMemberDto) {}
