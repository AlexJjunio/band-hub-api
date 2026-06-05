import { UserRole } from '../enums/user-role.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AuditEntity } from '../../common/entities/audit.entity';

@Entity('users')
export class User extends AuditEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.MUSICIAN,
  })
  role: UserRole;
}
