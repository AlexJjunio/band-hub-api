import { UserRole } from '../enums/user-role.enum';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
