import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ScaleMemberStatus } from '../enums/scale-member-status.enum';
import { AuditEntity } from '../../common/entities/audit.entity';

@Entity('scale_members')
export class ScaleMember extends AuditEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  scale_id!: number;

  @Column()
  user_id!: number;

  @Column()
  role_in_scale!: string;

  @Column({ type: 'enum', enum: ScaleMemberStatus })
  status!: ScaleMemberStatus;
}
