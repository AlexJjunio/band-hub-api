import { ScaleMemberStatus } from '../enums/scale-member-status.enum';

export class CreateScaleMemberDto {
  scale_id: number;
  user_id: number;
  role_in_scale: string;
  status: ScaleMemberStatus;
}
